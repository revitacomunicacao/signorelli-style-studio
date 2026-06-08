
## Visão geral

Site institucional sóbrio e editorial para a **Signorelli Sociedade de Advogados**, em português, com estética de escritório boutique de alto padrão — tipografia serifada de display, muito respiro, fotografia em destaque, e a paleta cinza (#414444) + bege (#B1AFA0) como base, sobre off-white quente.

Referências de tom: Sullivan & Cromwell, escritórios europeus boutique — sério, atemporal, sem efeitos de SaaS.

## Estrutura de páginas (TanStack Router)

- `/` — Home (hero, manifesto curto, áreas resumidas, sócios, CTA contato)
- `/escritorio` — Quem Somos (texto completo "Estratégia Jurídica de Resultados…" + "Por que a Signorelli")
- `/areas` — Áreas de Atuação (Tributário, Societário/Sucessório, Contratos, Contencioso)
- `/socios` — Sócios (Dr. Marcelo + Dra. Juliana com bio, OAB, formação)
- `/publicacoes` — placeholder para TCCs/artigos (ver nota abaixo)
- `/contato` — endereço, telefones, e-mail, mapa embed, formulário simples (mailto por enquanto)

Header fixo com logo Signorelli + nav. Footer com endereço completo, contatos, OAB.

## Design system

- Cores: `--ink: #414444`, `--sand: #B1AFA0`, `--bg: #faf8f3` (off-white quente), `--line: #e8e4db`
- Tipografia: **Cormorant Garamond** (display, headings) + **Inter** (corpo) — clássico jurídico
- Layout: container estreito (max-w-6xl), generoso whitespace, regras finas (hr 1px sand), numeração de seções estilo editorial ("01 — Escritório")
- Componentes: hero full-height com foto + título serifado grande; cards de área com numeração e linha divisória, sem sombra; cards de sócio em duas colunas grandes
- Imagens: usar as duas fotos enviadas (Dr. Marcelo, Dra. Juliana) + logo no header/footer

## Conteúdo-chave a incluir

- Sócios: Marcelo Barcelos Signorelli OAB/MG 111.939 (UEMS, USP-Tributário, UFU-Processual Civil, ex-professor) e Juliana de Melo Faria Azambuja OAB/MG 157.097
- Contato: (34) 3458-7342 | (34) 97263-8705 · contato@signorelliadv.com · Av. Maria Silva Garcia, 575, 13º andar, sala 1311, Innovatti Center, Granja Marileusa, Uberlândia-MG, CEP 38406-634
- SEO por rota (title, description, OG) em português

## Implementação técnica

- Frontend-only nesta etapa (sem Lovable Cloud). Formulário de contato via `mailto:` até definirmos backend.
- Fontes via Google Fonts no `__root.tsx`.
- Logo, fotos dos sócios e foto hero salvos em `src/assets/` a partir dos uploads.
- Rotas TanStack Start em `src/routes/`, layout compartilhado no `__root.tsx` (header + footer + Outlet).

## Notas / pendências

- **TCCs**: o cliente perguntou o melhor formato. Recomendo **PDFs hospedados** com cards listando título, autor, instituição e logo da faculdade. Por enquanto deixo a página `/publicacoes` com estrutura pronta e placeholders — você envia os PDFs depois.
- **Base path**: o site ficará em `revitacomunicacao.com.br/projetos/signorelliadv` durante o dev. Vou configurar para funcionar nesse subcaminho quando publicar (ou deixamos rodar na raiz do preview Lovable e ajustamos no deploy final — me confirme se prefere que eu já force `base: '/projetos/signorelliadv/'` no Vite).
