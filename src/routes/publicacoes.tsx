import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: [
      { title: "Publicações — Signorelli Sociedade de Advogados" },
      { name: "description", content: "Trabalhos acadêmicos, artigos e publicações dos sócios da Signorelli Sociedade de Advogados." },
      { property: "og:title", content: "Publicações — Signorelli" },
      { property: "og:description", content: "TCCs, artigos e produção acadêmica do escritório." },
    ],
  }),
  component: PublicacoesPage,
});

const placeholders = [
  { inst: "USP", area: "Direito Tributário", t: "Especialização em Direito Tributário", autor: "Marcelo Barcelos Signorelli" },
  { inst: "UFU", area: "Processo Civil", t: "Especialização em Direito Processual Civil", autor: "Marcelo Barcelos Signorelli" },
];

function PublicacoesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Publicações"
        title="Produção acadêmica e artigos."
        intro="Trabalhos de conclusão das especializações e artigos jurídicos produzidos pelo escritório. Em breve disponíveis para leitura e download."
      />

      <section className="border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel number="01">Em curadoria</SectionLabel>
          <div className="mt-12 grid gap-px bg-[color:var(--line)] md:grid-cols-2">
            {placeholders.map((p, i) => (
              <article key={i} className="bg-[color:var(--paper)] p-10">
                <p className="font-display text-3xl text-[color:var(--sand)]">{p.inst}</p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)]/60">{p.area}</p>
                <h3 className="font-display mt-6 text-2xl text-[color:var(--ink)]">{p.t}</h3>
                <p className="mt-2 text-sm text-[color:var(--ink)]/75">{p.autor}</p>
                <p className="mt-8 text-[11px] uppercase tracking-[0.25em] text-[color:var(--sand)]">Em breve · PDF</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}