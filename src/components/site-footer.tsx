import { Link } from "@tanstack/react-router";
import logo from "@/assets/signorelli-logo.png";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[color:var(--line)] bg-[color:var(--ink)] text-[color:var(--paper)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <img src={logo} alt="Signorelli" className="h-10 w-auto opacity-90 brightness-150" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-[color:var(--sand)]">
            Escritório boutique de advocacia empresarial. Estratégia jurídica de resultados para empresas que olham para o futuro.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--sand)]">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="tel:+553434587342" className="hover:text-[color:var(--sand-soft)]">(34) 3458-7342</a></li>
            <li><a href="tel:+5534972638705" className="hover:text-[color:var(--sand-soft)]">(34) 97263-8705</a></li>
            <li><a href="mailto:contato@signorelliadv.com" className="hover:text-[color:var(--sand-soft)]">contato@signorelliadv.com</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--sand)]">Endereço</h4>
          <address className="mt-4 not-italic text-sm leading-relaxed">
            Av. Maria Silva Garcia, 575<br />
            13º andar, sala 1311<br />
            Innovatti Center — Granja Marileusa<br />
            Uberlândia/MG · CEP 38406-634
          </address>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs text-[color:var(--sand)] md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Signorelli Sociedade de Advogados. Todos os direitos reservados.</span>
          <div className="flex gap-6">
            <Link to="/escritorio" className="hover:text-[color:var(--sand-soft)]">Escritório</Link>
            <Link to="/contato" className="hover:text-[color:var(--sand-soft)]">Fale conosco</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}