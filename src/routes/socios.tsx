import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";
import { AnimateIn } from "@/components/animate-in";
import { CornerAccent } from "@/components/decorative";
import marcelo from "@/assets/marcelo.jpg";
import juliana from "@/assets/juliana.jpg";
import { GraduationCap, Briefcase, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/socios")({
  head: () => ({
    meta: [
      { title: "Sócios — Signorelli Sociedade de Advogados" },
      {
        name: "description",
        content:
          "Marcelo Barcelos Signorelli e Juliana de Melo Faria Azambuja — sócios fundadores da Signorelli Sociedade de Advogados.",
      },
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
          <AnimateIn variant="fade-left" className="md:col-span-5">
            <div className="img-reveal relative aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
              <img src={marcelo} alt="Marcelo Barcelos Signorelli" className="h-full w-full object-cover" />
              <CornerAccent className="bottom-4 right-4 rotate-180 border-b border-r border-t-0 border-l-0" />
            </div>
          </AnimateIn>
          <div className="md:col-span-7">
            <SectionLabel number="01">Sócio fundador</SectionLabel>
            <AnimateIn variant="fade-up" delay={100}>
              <h2 className="font-display mt-6 text-4xl text-[color:var(--ink)] md:text-5xl">Marcelo Barcelos Signorelli</h2>
            </AnimateIn>
            <AnimateIn variant="fade-in" delay={150}>
              <p className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--sand)]">
                <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                OAB/MG 111.939
              </p>
            </AnimateIn>
            <ul className="mt-8 space-y-4 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
              {[
                { icon: Briefcase, text: "Advogado" },
                { icon: GraduationCap, text: "Formado pela Universidade Estadual de Mato Grosso do Sul (UEMS)" },
                { icon: GraduationCap, text: "Especialista em Direito Tributário pela Universidade de São Paulo (USP)" },
                { icon: GraduationCap, text: "Especialista em Direito Processual Civil pela Universidade Federal de Uberlândia (UFU)" },
                {
                  icon: GraduationCap,
                  text: "Ex-professor universitário de Direito Empresarial, Administrativo, Comercial, Tributário, Agrário e Ambiental",
                },
              ].map((item, i) => (
                <AnimateIn key={item.text} variant="fade-up" delay={200 + i * 60}>
                  <li className="flex gap-3">
                    <item.icon className="mt-1 h-4 w-4 shrink-0 text-[color:var(--sand)]" strokeWidth={1.5} />
                    {item.text}
                  </li>
                </AnimateIn>
              ))}
            </ul>
            <AnimateIn variant="fade-up" delay={500}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Direito Civil", "Direito Tributário", "Direito Administrativo", "Direito Societário"].map((t) => (
                  <span
                    key={t}
                    className="border border-[color:var(--sand)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink)]/80 transition-colors hover:border-[color:var(--ink)] hover:bg-[color:var(--muted)]/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)] bg-[color:var(--muted)]/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="order-2 md:order-1 md:col-span-7">
            <SectionLabel number="02">Sócia</SectionLabel>
            <AnimateIn variant="fade-up" delay={100}>
              <h2 className="font-display mt-6 text-4xl text-[color:var(--ink)] md:text-5xl">
                Juliana de Melo Faria Azambuja
              </h2>
            </AnimateIn>
            <AnimateIn variant="fade-in" delay={150}>
              <p className="mt-2 flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[color:var(--sand)]">
                <BadgeCheck className="h-3.5 w-3.5" strokeWidth={1.5} />
                OAB/MG 157.097
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={200}>
              <p className="mt-8 text-[15px] leading-relaxed text-[color:var(--ink)]/85">
                Advogada com atuação consultiva e contenciosa, dedicada ao Direito Empresarial e ao planejamento
                sucessório familiar. Combina rigor técnico e sensibilidade na condução de relações entre sócios e
                estruturas patrimoniais.
              </p>
            </AnimateIn>
            <AnimateIn variant="fade-up" delay={280}>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Direito Empresarial", "Direito de Família", "Planejamento Sucessório", "Governança"].map((t) => (
                  <span
                    key={t}
                    className="border border-[color:var(--sand)] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--ink)]/80 transition-colors hover:border-[color:var(--ink)] hover:bg-[color:var(--muted)]/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </AnimateIn>
          </div>
          <AnimateIn variant="fade-right" className="order-1 md:order-2 md:col-span-5">
            <div className="img-reveal relative aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
              <img src={juliana} alt="Juliana de Melo Faria Azambuja" className="h-full w-full object-cover" />
              <CornerAccent className="bottom-4 left-4 rotate-180 border-b border-l border-t-0 border-r-0" />
            </div>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
