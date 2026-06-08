import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";
import { AnimateIn } from "@/components/animate-in";
import { IconBox } from "@/components/icon-box";
import { GridPattern } from "@/components/decorative";
import { GraduationCap, Eye, Target, ArrowRight, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/escritorio")({
  head: () => ({
    meta: [
      { title: "O Escritório — Signorelli Sociedade de Advogados" },
      {
        name: "description",
        content:
          "Escritório boutique com atuação especializada em Direito Tributário, Societário e Contencioso. Conheça a Signorelli Sociedade de Advogados.",
      },
      { property: "og:title", content: "O Escritório — Signorelli" },
      { property: "og:description", content: "Boutique de advocacia empresarial em Uberlândia/MG." },
    ],
  }),
  component: EscritorioPage,
});

const pillars = [
  {
    icon: GraduationCap,
    t: "Banca Especializada",
    d: "Liderada pelos sócios Marcelo Signorelli e Juliana Azambuja, com especializações em Direito Tributário pela USP, Processo Civil pela UFU e FBD e Direito de Família pelo IBDFAM.",
  },
  {
    icon: Eye,
    t: "Visão Multidisciplinar",
    d: "Bagagem teórica e experiência prática permitem abordagem completa que protege o patrimônio da empresa e o planejamento sucessório dos sócios.",
  },
  {
    icon: Target,
    t: "Foco em Resultados",
    d: "A participação em grandes disputas judiciais nos deu a visão necessária para criar estratégias preventivas que evitam riscos e otimizam custos.",
  },
];

function EscritorioPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Quem somos"
        title="Estratégia jurídica de resultados para empresas que olham para o futuro."
      />

      <section className="relative border-t border-[color:var(--line)]">
        <GridPattern className="opacity-15" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel number="01">Boutique</SectionLabel>
          </div>
          <div className="space-y-6 text-base leading-relaxed text-[color:var(--ink)]/85 md:col-span-8">
            {[
              <>
                Somos um <strong>Escritório Boutique</strong>, caracterizado por uma equipe enxuta de alta
                especialização em nichos específicos e atendimento personalizado. Essa atuação garante que seu caso
                seja tratado sempre por profissionais experientes e capacitados, de forma artesanal e meticulosa.
              </>,
              <>
                A <strong>Signorelli Sociedade de Advogados</strong> consolidou-se pela excelência técnica em frentes
                decisivas do Direito. Unimos a solidez acadêmica de instituições como <strong>USP</strong> e{" "}
                <strong>UFU</strong> à agilidade prática exigida pelo mercado corporativo nos mais de 20 anos de
                experiência de seus sócios.
              </>,
              <>
                Acreditamos que a advocacia moderna vai além dos tribunais. Nosso compromisso é transformar o
                conhecimento jurídico em vantagem competitiva para nossos clientes, garantindo que cada decisão tomada
                seja um passo seguro para o crescimento do negócio.
              </>,
            ].map((paragraph, i) => (
              <AnimateIn key={i} variant="fade-up" delay={i * 100}>
                <p>{paragraph}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--muted)]/40">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <SectionLabel number="02">Por que a Signorelli</SectionLabel>
          <div className="mt-12 grid gap-px bg-[color:var(--line)] md:grid-cols-3">
            {pillars.map((c, i) => (
              <AnimateIn key={c.t} variant="fade-up" delay={i * 120}>
                <div className="group card-hover h-full bg-[color:var(--paper)] p-10">
                  <IconBox icon={c.icon} size="md" className="mb-6" />
                  <p className="font-display text-2xl text-[color:var(--sand)]">0{i + 1}</p>
                  <h3 className="font-display mt-4 text-2xl text-[color:var(--ink)]">{c.t}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink)]/75">{c.d}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)]">
        <AnimateIn variant="fade-up">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center">
            <p className="font-display text-2xl text-[color:var(--ink)] md:text-3xl">
              Conheça nossos sócios e áreas de atuação.
            </p>
            <div className="flex gap-4">
              <Link
                to="/socios"
                className="group inline-flex items-center gap-2 border border-[color:var(--ink)]/30 px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition-all hover:border-[color:var(--ink)] hover:bg-[color:var(--muted)]/50"
              >
                Sócios
                <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/areas"
                className="btn-primary group inline-flex items-center gap-2 bg-[color:var(--ink)] px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-[color:var(--paper)]"
              >
                Áreas
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
