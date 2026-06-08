import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";
import { AnimateIn } from "@/components/animate-in";
import { IconBox } from "@/components/icon-box";
import { Scale, Building2, FileText, Gavel, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/areas")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação — Signorelli Sociedade de Advogados" },
      {
        name: "description",
        content:
          "Direito Tributário, Societário e Sucessório, Contratos e Contencioso Estratégico. Soluções jurídicas para empresas.",
      },
      { property: "og:title", content: "Áreas de Atuação — Signorelli" },
      { property: "og:description", content: "Pilares de atuação: Tributário, Societário, Contratos e Contencioso." },
    ],
  }),
  component: AreasPage,
});

type Area = {
  n: string;
  icon: LucideIcon;
  t: string;
  s: string;
  d: string;
  items: string[];
};

const areas: Area[] = [
  {
    n: "I",
    icon: Scale,
    t: "Direito Tributário",
    s: "Inteligência Fiscal",
    d: "Não tratamos impostos apenas como uma obrigação, mas como uma variável estratégica. Nossa missão é reduzir o impacto tributário de forma legal e segura.",
    items: [
      "Recuperação de créditos tributários",
      "Planejamento fiscal para redução de custos",
      "Defesa administrativa e judicial",
    ],
  },
  {
    n: "II",
    icon: Building2,
    t: "Direito Societário e Sucessório",
    s: "Proteção de Valor",
    d: "Estruturamos sua empresa para que ela seja resiliente a crises e conflitos. Atuamos na organização das relações entre sócios e na preservação do legado familiar.",
    items: [
      "Constituição e reestruturação de sociedades (Holdings e empresas operacionais)",
      "Acordos de sócios e regramentos internos",
      "Adequação do melhor tipo societário",
      "Planejamento sucessório e governança para garantir a continuidade do negócio",
    ],
  },
  {
    n: "III",
    icon: FileText,
    t: "Contratos",
    s: "Segurança nas Relações Comerciais",
    d: "Contratos mal redigidos são custos invisíveis. Criamos instrumentos que protegem seus interesses, garantem o cumprimento das obrigações e minimizam o risco de processos futuros.",
    items: [
      "Elaboração e revisão de contratos comerciais e operacionais",
      "Negociações estratégicas com fornecedores e parceiros",
      "Gestão de riscos contratuais",
      "Contratos customizados para atender aos detalhes de cada negociação",
    ],
  },
  {
    n: "IV",
    icon: Gavel,
    t: "Contencioso Processual Estratégico",
    s: "Defesa rigorosa em todas as instâncias",
    d: "Quando o litígio se torna inevitável, aplicamos nossa experiência de mais de 20 anos nos Tribunais para defender os interesses da empresa com o máximo rigor técnico e agilidade.",
    items: [
      "Gestão de processos judiciais complexos",
      "Foco em resultados e redução de passivos",
      "Atuação personalizada e experiência em Tribunais, STJ e STF",
    ],
  },
];

function AreasPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Áreas de atuação"
        title="Soluções jurídicas estratégicas."
        intro="Nossa atuação é desenhada para dar suporte total à operação empresarial, com foco nos pilares que sustentam a saúde financeira e a segurança de qualquer negócio."
      />

      <div className="mx-auto max-w-6xl px-6 pb-24">
        {areas.map((a, idx) => (
          <AnimateIn key={a.n} variant="fade-up" delay={idx * 60}>
            <section className="group grid gap-10 border-t border-[color:var(--line)] py-16 md:grid-cols-12">
              <div className="md:col-span-4">
                <div className="flex items-start gap-4">
                  <IconBox icon={a.icon} size="lg" />
                  <div>
                    <SectionLabel number={a.n}>{a.s}</SectionLabel>
                    <h2 className="font-display mt-6 text-3xl text-[color:var(--ink)] md:text-4xl">{a.t}</h2>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-[color:var(--ink)]/80">{a.d}</p>
                <ul className="mt-8 space-y-3">
                  {a.items.map((it, i) => (
                    <li
                      key={it}
                      className="flex gap-4 border-b border-[color:var(--line)] pb-3 text-sm text-[color:var(--ink)]/85 transition-colors hover:text-[color:var(--ink)]"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--sand)]" strokeWidth={1.5} />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
