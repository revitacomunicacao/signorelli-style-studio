import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const distDir = join(root, "dist");
const clientDir = join(distDir, "client");
const tempDir = join(root, ".dist-temp");

function loadEnvFile(filename) {
  const path = join(root, filename);
  if (!existsSync(path)) return {};

  const env = {};
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }
  return env;
}

const env = {
  ...loadEnvFile(".env"),
  ...loadEnvFile(".env.production"),
  ...process.env,
};

const basePath = env.VITE_BASE_PATH || "/";
const rewriteBase = basePath.endsWith("/") ? basePath : `${basePath}/`;
const assetPrefix =
  basePath === "/" ? "/assets/" : `${basePath.endsWith("/") ? basePath : `${basePath}/`}assets/`;

const ROUTE_DIRS = ["areas", "contato", "escritorio", "publicacoes", "socios"];

function removeRouteHtmlFolders(dir) {
  for (const name of ROUTE_DIRS) {
    const routeDir = join(dir, name);
    if (existsSync(routeDir)) {
      rmSync(routeDir, { recursive: true, force: true });
    }
  }

  const shellHtml = join(dir, "_shell.html");
  if (existsSync(shellHtml)) {
    rmSync(shellHtml, { force: true });
  }
}

function assertDeployBundle(dir) {
  const indexHtml = join(dir, "index.html");
  const assetsDir = join(dir, "assets");
  const htaccess = join(dir, ".htaccess");

  if (!existsSync(indexHtml)) {
    console.error("Erro: index.html não encontrado em dist/.");
    process.exit(1);
  }

  if (!existsSync(assetsDir)) {
    console.error("Erro: pasta dist/assets/ não encontrada.");
    process.exit(1);
  }

  if (!existsSync(htaccess)) {
    console.error("Erro: dist/.htaccess não encontrado.");
    process.exit(1);
  }

  const assetFiles = readdirSync(assetsDir);
  const hasJs = assetFiles.some((f) => f.endsWith(".js"));
  const hasCss = assetFiles.some((f) => f.endsWith(".css"));

  if (!hasJs || !hasCss) {
    console.error("Erro: dist/assets/ incompleto (faltam arquivos .js ou .css).");
    process.exit(1);
  }

  const html = readFileSync(indexHtml, "utf8");
  if (!html.includes(`href="${assetPrefix}`) && !html.includes(`src="${assetPrefix}`)) {
    console.error(`Erro: index.html não referencia assets em "${assetPrefix}".`);
    console.error("Verifique VITE_BASE_PATH em .env.production antes do build.");
    process.exit(1);
  }

  const htaccessContent = readFileSync(htaccess, "utf8");
  if (!htaccessContent.includes(`RewriteBase ${rewriteBase}`)) {
    console.error(`Erro: .htaccess RewriteBase deve ser "${rewriteBase}".`);
    process.exit(1);
  }
}

if (!existsSync(clientDir)) {
  console.error("Build incompleto: dist/client/ não encontrado. Execute: npm run build");
  process.exit(1);
}

if (existsSync(tempDir)) {
  rmSync(tempDir, { recursive: true, force: true });
}

cpSync(clientDir, tempDir, { recursive: true });
rmSync(distDir, { recursive: true, force: true });
mkdirSync(distDir, { recursive: true });
cpSync(tempDir, distDir, { recursive: true });
rmSync(tempDir, { recursive: true, force: true });

removeRouteHtmlFolders(distDir);

const htaccessPath = join(distDir, ".htaccess");
if (existsSync(htaccessPath)) {
  let htaccess = readFileSync(htaccessPath, "utf8");
  htaccess = htaccess.replace(/RewriteBase\s+\S+/, `RewriteBase ${rewriteBase}`);
  writeFileSync(htaccessPath, htaccess);
}

assertDeployBundle(distDir);

const assetCount = readdirSync(join(distDir, "assets")).length;
const deployTarget =
  basePath === "/"
    ? "public_html/"
    : `public_html${basePath.endsWith("/") ? basePath.slice(0, -1) : basePath}/`;

console.log("");
console.log("Build pronto em dist/");
console.log("");
console.log(`  index.html`);
console.log(`  assets/     (${assetCount} arquivos)`);
console.log(`  .htaccess   (RewriteBase ${rewriteBase})`);
console.log("");
console.log(`Base path: ${basePath}`);
console.log(`Envie TODO o conteúdo de dist/ para ${deployTarget}`);
console.log("Ative 'Show Hidden Files' para incluir o .htaccess.");
console.log("");
