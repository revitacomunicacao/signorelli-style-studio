import { createFileRoute, Link } from "@tanstack/react-router";
import marcelo from "@/assets/marcelo.jpg";
import juliana from "@/assets/juliana.jpg";
import { SectionLabel } from "@/components/section";
import { AnimateIn } from "@/components/animate-in";
import { IconBox } from "@/components/icon-box";
import { CornerAccent, FloatingLine, GridPattern } from "@/components/decorative";
import {
  Scale,
  Building2,
  FileText,
  Gavel,
  ArrowRight,
  Award,
  Users,
  Clock,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signorelli Sociedade de Advogados — Advocacia Empresarial em Uberlândia" },
      {
        name: "description",
        content:
          "Escritório boutique de advocacia empresarial. Estratégia jurídica em Tributário, Societário, Contratos e Contencioso. Uberlândia/MG.",
      },
      { property: "og:title", content: "Signorelli Sociedade de Advogados" },
      {
        property: "og:description",
        content: "Estratégia jurídica de resultados para empresas que olham para o futuro.",
      },
    ],
  }),
  component: Index,
});

const areas = [
  {
    n: "I",
    icon: Scale,
    t: "Direito Tributário",
    d: "Inteligência fiscal: recuperação de créditos, planejamento e defesa administrativa e judicial.",
  },
  {
    n: "II",
    icon: Building2,
    t: "Societário e Sucessório",
    d: "Holdings, acordos de sócios, governança e planejamento sucessório para preservar o legado.",
  },
  {
    n: "III",
    icon: FileText,
    t: "Contratos",
    d: "Instrumentos sob medida que protegem interesses, garantem cumprimento e reduzem litígios.",
  },
  {
    n: "IV",
    icon: Gavel,
    t: "Contencioso Estratégico",
    d: "Mais de 20 anos em tribunais, STJ e STF, com foco em redução de passivos e resultado.",
  },
];

const stats = [
  { icon: Clock, value: "20+", label: "Anos de experiência" },
  { icon: Award, value: "USP", label: "Especialização tributária" },
  { icon: Users, value: "2", label: "Sócios fundadores" },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <GridPattern className="opacity-20" />
        <CornerAccent className="left-6 top-6" />
        <FloatingLine className="right-12 top-32 hidden md:block" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <AnimateIn variant="fade-in" duration={500}>
              <SectionLabel number="01">Signorelli Sociedade de Advogados</SectionLabel>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={100}>
              <h1 className="font-display mt-8 text-5xl leading-[1.02] text-[color:var(--ink)] md:text-7xl">
                Estratégia jurídica de resultados para empresas que olham para o futuro.
              </h1>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--ink)]/80">
                Escritório boutique com atendimento artesanal e alta especialização em Direito Tributário, Societário,
                Contratos e Contencioso Estratégico.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={300}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contato"
                  className="btn-primary group inline-flex items-center gap-2 bg-[color:var(--ink)] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--paper)] transition-colors hover:bg-[color:var(--ink)]/90"
                >
                  Fale com o escritório
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/areas"
                  className="inline-flex items-center gap-2 border border-[color:var(--ink)]/30 px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:border-[color:var(--ink)] hover:bg-[color:var(--muted)]/50"
                >
                  Áreas de atuação
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </AnimateIn>
          </div>

          <AnimateIn variant="fade-right" delay={200} className="md:col-span-5">
            <div className="img-reveal relative aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
              <img src={marcelo} alt="Dr. Marcelo Barcelos Signorelli" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--ink)]/80 to-transparent p-6">
                <p className="font-display text-2xl text-[color:var(--paper)]">Marcelo Barcelos Signorelli</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--sand-soft)]">
                  Sócio fundador · OAB/MG 111.939
                </p>
              </div>
              <CornerAccent className="bottom-4 right-4 rotate-180 border-b border-r border-t-0 border-l-0" />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-[color:var(--line)] bg-[color:var(--muted)]/30">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px bg-[color:var(--line)] md:grid-cols-3">
          {stats.map((s, i) => (
            <AnimateIn key={s.label} variant="fade-up" delay={i * 100}>
              <div className="group flex items-center gap-5 bg-[color:var(--paper)] px-8 py-8 transition-colors hover:bg-white">
                <IconBox icon={s.icon} size="sm" className="icon-pulse" />
                <div>
                  <p className="font-display text-3xl text-[color:var(--ink)]">{s.value}</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--sand)]">{s.label}</p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel number="02">O escritório</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <AnimateIn variant="fade-up">
              <p className="font-display text-3xl leading-snug text-[color:var(--ink)] md:text-4xl">
                Unimos a solidez acadêmica da <em>USP</em> e da <em>UFU</em> à agilidade prática exigida pelo mercado
                corporativo, em mais de 20 anos de atuação dos sócios.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={120}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--ink)]/75">
                Acreditamos que a advocacia moderna vai além dos tribunais. Nosso compromisso é transformar o
                conhecimento jurídico em vantagem competitiva, garantindo que cada decisão seja um passo seguro para o
                crescimento do negócio.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <Link
                to="/escritorio"
                className="group mt-10 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] underline underline-offset-8 decoration-[color:var(--sand)] hover:decoration-[color:var(--ink)]"
              >
                Conheça o escritório
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel number="03">Soluções jurídicas estratégicas</SectionLabel>
          <AnimateIn variant="fade-up" delay={80}>
            <h2 className="font-display mt-8 max-w-3xl text-4xl leading-tight text-[color:var(--ink)] md:text-5xl">
              Quatro pilares que sustentam a operação e o legado do seu negócio.
            </h2>
          </AnimateIn>
          <div className="mt-16 grid gap-px bg-[color:var(--line)] md:grid-cols-2">
            {areas.map((a, i) => (
              <AnimateIn key={a.n} variant="fade-up" delay={i * 80}>
                <div className="group card-hover flex h-full flex-col bg-[color:var(--paper)] p-10">
                  <div className="flex items-start justify-between">
                    <IconBox icon={a.icon} size="md" />
                    <p className="font-display text-2xl text-[color:var(--sand)]">{a.n}</p>
                  </div>
                  <h3 className="font-display mt-6 text-2xl text-[color:var(--ink)]">{a.t}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--ink)]/75">{a.d}</p>
                  <Link
                    to="/areas"
                    className="mt-6 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-[color:var(--sand)] opacity-0 transition-all group-hover:opacity-100"
                  >
                    Saiba mais <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn variant="fade-in" delay={400}>
            <div className="mt-12 text-right">
              <Link
                to="/areas"
                className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] underline underline-offset-8 decoration-[color:var(--sand)] hover:decoration-[color:var(--ink)]"
              >
                Todas as áreas
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SOCIOS PREVIEW */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel number="04">Sócios</SectionLabel>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {[
              {
                img: marcelo,
                n: "Marcelo Barcelos Signorelli",
                oab: "OAB/MG 111.939",
                spec: "Especialista em Direito Tributário (USP) e Processual Civil (UFU).",
              },
              {
                img: juliana,
                n: "Juliana de Melo Faria Azambuja",
                oab: "OAB/MG 157.097",
                spec: "Atuação consultiva e contenciosa em Direito Empresarial e de Família.",
              },
            ].map((s, i) => (
              <AnimateIn key={s.n} variant={i === 0 ? "fade-left" : "fade-right"} delay={i * 100}>
                <div className="group">
                  <div className="img-reveal aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
                    <img src={s.img} alt={s.n} className="h-full w-full object-cover" />
                  </div>
                  <h3 className="font-display mt-6 text-2xl text-[color:var(--ink)] transition-colors group-hover:text-[color:var(--sand)]">
                    {s.n}
                  </h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--sand)]">{s.oab}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/75">{s.spec}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn variant="fade-up" delay={200}>
            <div className="mt-12 text-center">
              <Link
                to="/socios"
                className="group inline-flex items-center gap-2 border border-[color:var(--ink)]/30 px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] transition-all hover:border-[color:var(--ink)] hover:bg-[color:var(--muted)]/50"
              >
                Conheça os sócios
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[color:var(--ink)] text-[color:var(--paper)]">
        <GridPattern className="opacity-[0.06] invert" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-12">
          <AnimateIn variant="fade-up" className="md:col-span-8">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Vamos conversar sobre o futuro do seu negócio.
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--sand-soft)]">
              Agende uma reunião reservada com nossos sócios em Uberlândia ou por videoconferência.
            </p>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={150} className="md:col-span-4 md:text-right">
            <Link
              to="/contato"
              className="btn-primary group inline-flex items-center gap-2 border border-[color:var(--sand)] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--paper)] transition-colors hover:bg-[color:var(--sand)] hover:text-[color:var(--ink)]"
            >
              Fale conosco
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
