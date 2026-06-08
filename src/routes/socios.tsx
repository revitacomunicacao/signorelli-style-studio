import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";
import marcelo from "@/assets/marcelo.jpg";
import juliana from "@/assets/juliana.jpg";

export const Route = createFileRoute("/socios")({
  head: () => ({
    meta: [
      { title: "Sócios — Signorelli Sociedade de Advogados" },
      { name: "description", content: "Marcelo Barcelos Signorelli e Juliana de Melo Faria Azambuja — sócios fundadores da Signorelli Sociedade de Advogados." },
      { property: "og:title", content: "Sócios — Signorelli" },
      { property: "og:description", content: "Conheça os sócios fundadores do escritório." },
    ],
  }),
  component: SociosPage,
});

function SociosPage() {
  return (
    <div>
      <PageHeader eyebrow="Sócios" title="A equipe que conduz cada caso." />

      <section className="border-t border-[color:var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
              <img src={marcelo} alt="Marcelo Barcelos Signorelli" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-7">
            <SectionLabel number="01">Sócio fundador</SectionLabel>
            <h2 className="font-display mt-6 text-4xl text-[color:var(--ink)] md:text-5xl">Marcelo Barcelos Signorelli</h2>
            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[color:var(--sand)]">OAB/MG 111.939</p>
            <ul className="mt-8 space-y-3 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
              <li>— Advogado</li>
              <li>— Formado pela Universidade Estadual de Mato Grosso do Sul (UEMS)</li>
              <li>— Especialista em Direito Tributário pela Universidade de São Paulo (USP)</li>
              <li>— Especialista em Direito Processual Civil pela Universidade Federal de Uberlândia (UFU)</li>
              <li>— Ex-professor universitário de Direito Empresarial, Administrativo, Comercial, Tributário, Agrário e Ambiental</li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Direito Civil", "Direito Tributário", "Direito Administrativo", "Direito Societário"].map((t) => (
                <span key={t} className="border border-[color:var(--sand)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink)]/80">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--muted)]/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-7">
            <SectionLabel number="02">Sócia</SectionLabel>
            <h2 className="font-display mt-6 text-4xl text-[color:var(--ink)] md:text-5xl">Juliana de Melo Faria Azambuja</h2>
            <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-[color:var(--sand)]">OAB/MG 157.097</p>
            <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
              Advogada com atuação consultiva e contenciosa, dedicada ao Direito Empresarial e ao planejamento sucessório familiar. Combina rigor técnico e sensibilidade na condução de relações entre sócios e estruturas patrimoniais.
            </p>
          </div>
          <div className="order-1 md:order-2 md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
              <img src={juliana} alt="Juliana de Melo Faria Azambuja" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}