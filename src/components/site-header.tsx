import { Link } from "@tanstack/react-router";
import logo from "@/assets/signorelli-logo.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color:var(--paper)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
          <img src={logo} alt="Signorelli Sociedade de Advogados" className="h-8 w-auto transition-transform duration-500 group-hover:scale-[1.02]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="nav-link text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink)]/80 transition-colors hover:text-[color:var(--ink)]"
              activeProps={{ className: "nav-link is-active text-[color:var(--ink)] font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contato"
          className="btn-primary hidden bg-[color:var(--ink)] px-5 py-2.5 text-[10px] uppercase tracking-[0.2em] text-[color:var(--paper)] transition-colors hover:bg-[color:var(--ink)]/90 md:inline-flex"
        >
          Fale conosco
        </Link>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 text-[color:var(--ink)] md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="h-5 w-5" strokeWidth={1.5} /> : <Menu className="h-5 w-5" strokeWidth={1.5} />}
          <span className="text-xs uppercase tracking-widest">{open ? "Fechar" : "Menu"}</span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[color:var(--line)] bg-[color:var(--paper)] transition-all duration-300 md:hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4">
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--line)] py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--ink)]/80 transition-colors hover:text-[color:var(--ink)]"
              style={{ animationDelay: `${i * 50}ms` }}
              activeProps={{ className: "border-b border-[color:var(--line)] py-3 text-sm uppercase tracking-[0.2em] text-[color:var(--ink)] font-medium" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
