import { Link } from "@tanstack/react-router";
import logo from "@/assets/signorelli-logo.png";
import { useState } from "react";

const nav = [
  { to: "/", label: "Início" },
  { to: "/escritorio", label: "Escritório" },
  { to: "/areas", label: "Áreas" },
  { to: "/socios", label: "Sócios" },
  { to: "/publicacoes", label: "Publicações" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Signorelli Sociedade de Advogados" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink)]/80 transition-colors hover:text-[color:var(--ink)]"
              activeProps={{ className: "text-[color:var(--ink)] font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-[color:var(--ink)] text-xs uppercase tracking-widest"
          aria-label="Menu"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-[color:var(--line)] bg-[color:var(--paper)] px-6 py-6 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="text-sm uppercase tracking-[0.2em] text-[color:var(--ink)]/80"
              activeProps={{ className: "text-[color:var(--ink)] font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}