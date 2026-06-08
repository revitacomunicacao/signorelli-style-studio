import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";
import { AnimateIn } from "@/components/animate-in";
import { BookOpen, FileDown, GraduationCap } from "lucide-react";

export const Route = createFileRoute("/publicacoes")({
  head: () => ({
    meta: [
      { title: "Publicações — Signorelli Sociedade de Advogados" },
      {
        name: "description",
        content: "Trabalhos acadêmicos, artigos e publicações dos sócios da Signorelli Sociedade de Advogados.",
      },
      { property: "og:title", content: "Publicações — Signorelli" },
      { property: "og:description", content: "TCCs, artigos e produção acadêmica do escritório." },
    ],
  }),
  component: PublicacoesPage,
});

const placeholders = [
  {
    inst: "USP",
    area: "Direito Tributário",
    t: "Especialização em Direito Tributário",
    autor: "Marcelo Barcelos Signorelli",
  },
  {
    inst: "UFU",
    area: "Processo Civil",
    t: "Especialização em Direito Processual Civil",
    autor: "Marcelo Barcelos Signorelli",
  },
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
              <AnimateIn key={p.t} variant="fade-up" delay={i * 120}>
                <article className="group card-hover relative h-full bg-[color:var(--paper)] p-10">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-[color:var(--sand)]/40 bg-[color:var(--muted)]/60 text-[color:var(--ink)] transition-colors group-hover:border-[color:var(--sand)]">
                      <GraduationCap className="h-5 w-5" strokeWidth={1.25} />
                    </div>
                    <p className="font-display text-3xl text-[color:var(--sand)]">{p.inst}</p>
                  </div>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)]/60">{p.area}</p>
                  <h3 className="font-display mt-4 text-2xl text-[color:var(--ink)]">{p.t}</h3>
                  <p className="mt-2 text-sm text-[color:var(--ink)]/75">{p.autor}</p>
                  <div className="mt-8 flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[color:var(--sand)]">
                    <FileDown className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Em breve · PDF
                  </div>
                </article>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--muted)]/30">
        <AnimateIn variant="fade-up">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-16 text-center">
            <BookOpen className="h-8 w-8 text-[color:var(--sand)]" strokeWidth={1.25} />
            <p className="font-display max-w-lg text-2xl text-[color:var(--ink)]">
              Novas publicações serão adicionadas em breve.
            </p>
            <p className="max-w-md text-sm text-[color:var(--ink)]/70">
              Artigos jurídicos, pareceres e trabalhos acadêmicos dos sócios estarão disponíveis para consulta e download.
            </p>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
