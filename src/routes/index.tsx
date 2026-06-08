import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import marcelo from "@/assets/marcelo.jpg";
import juliana from "@/assets/juliana.jpg";
import { SectionLabel } from "@/components/section";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signorelli Sociedade de Advogados — Advocacia Empresarial em Uberlândia" },
      { name: "description", content: "Escritório boutique de advocacia empresarial. Estratégia jurídica em Tributário, Societário, Contratos e Contencioso. Uberlândia/MG." },
      { property: "og:title", content: "Signorelli Sociedade de Advogados" },
      { property: "og:description", content: "Estratégia jurídica de resultados para empresas que olham para o futuro." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-[color:var(--line)]">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:py-32">
          <div className="md:col-span-7">
            <SectionLabel number="01">Signorelli Sociedade de Advogados</SectionLabel>
            <h1 className="font-display mt-8 text-5xl leading-[1.02] text-[color:var(--ink)] md:text-7xl">
              Estratégia jurídica de resultados para empresas que olham para o futuro.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-[color:var(--ink)]/80">
              Escritório boutique com atendimento artesanal e alta especialização em Direito Tributário, Societário, Contratos e Contencioso Estratégico.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center bg-[color:var(--ink)] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--paper)] transition-colors hover:bg-[color:var(--ink)]/90"
              >
                Fale com o escritório
              </Link>
              <Link
                to="/areas"
                className="inline-flex items-center justify-center border border-[color:var(--ink)]/30 px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] transition-colors hover:border-[color:var(--ink)]"
              >
                Áreas de atuação
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
              <img src={marcelo} alt="Dr. Marcelo Barcelos Signorelli" className="h-full w-full object-cover" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent p-6">
                <p className="font-display text-2xl text-[color:var(--paper)]">Marcelo Barcelos Signorelli</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[color:var(--sand-soft)]">Sócio fundador · OAB/MG 111.939</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel number="02">O escritório</SectionLabel>
          </div>
          <div className="md:col-span-8">
            <p className="font-display text-3xl leading-snug text-[color:var(--ink)] md:text-4xl">
              Unimos a solidez acadêmica da <em>USP</em> e da <em>UFU</em> à agilidade prática exigida pelo mercado corporativo, em mais de 20 anos de atuação dos sócios.
            </p>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-[color:var(--ink)]/75">
              Acreditamos que a advocacia moderna vai além dos tribunais. Nosso compromisso é transformar o conhecimento jurídico em vantagem competitiva, garantindo que cada decisão seja um passo seguro para o crescimento do negócio.
            </p>
            <Link to="/escritorio" className="mt-10 inline-block text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] underline underline-offset-8 decoration-[color:var(--sand)] hover:decoration-[color:var(--ink)]">
              Conheça o escritório
            </Link>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel number="03">Soluções jurídicas estratégicas</SectionLabel>
          <h2 className="font-display mt-8 max-w-3xl text-4xl leading-tight text-[color:var(--ink)] md:text-5xl">
            Quatro pilares que sustentam a operação e o legado do seu negócio.
          </h2>
          <div className="mt-16 grid gap-px bg-[color:var(--line)] md:grid-cols-2">
            {[
              { n: "I", t: "Direito Tributário", d: "Inteligência fiscal: recuperação de créditos, planejamento e defesa administrativa e judicial." },
              { n: "II", t: "Societário e Sucessório", d: "Holdings, acordos de sócios, governança e planejamento sucessório para preservar o legado." },
              { n: "III", t: "Contratos", d: "Instrumentos sob medida que protegem interesses, garantem cumprimento e reduzem litígios." },
              { n: "IV", t: "Contencioso Estratégico", d: "Mais de 20 anos em tribunais, STJ e STF, com foco em redução de passivos e resultado." },
            ].map((a) => (
              <div key={a.n} className="group bg-[color:var(--paper)] p-10 transition-colors hover:bg-white">
                <p className="font-display text-2xl text-[color:var(--sand)]">{a.n}</p>
                <h3 className="font-display mt-6 text-2xl text-[color:var(--ink)]">{a.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[color:var(--ink)]/75">{a.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-right">
            <Link to="/areas" className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)] underline underline-offset-8 decoration-[color:var(--sand)] hover:decoration-[color:var(--ink)]">
              Todas as áreas →
            </Link>
          </div>
        </div>
      </section>

      {/* SOCIOS PREVIEW */}
      <section className="border-b border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel number="04">Sócios</SectionLabel>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {[
              { img: marcelo, n: "Marcelo Barcelos Signorelli", oab: "OAB/MG 111.939", spec: "Especialista em Direito Tributário (USP) e Processual Civil (UFU)." },
              { img: juliana, n: "Juliana de Melo Faria Azambuja", oab: "OAB/MG 157.097", spec: "Atuação consultiva e contenciosa em Direito Empresarial e de Família." },
            ].map((s) => (
              <div key={s.n}>
                <div className="aspect-[4/5] overflow-hidden bg-[color:var(--muted)]">
                  <img src={s.img} alt={s.n} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-display mt-6 text-2xl text-[color:var(--ink)]">{s.n}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-[color:var(--sand)]">{s.oab}</p>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/75">{s.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[color:var(--ink)] text-[color:var(--paper)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 md:grid-cols-12">
          <div className="md:col-span-8">
            <h2 className="font-display text-4xl leading-tight md:text-5xl">
              Vamos conversar sobre o futuro do seu negócio.
            </h2>
            <p className="mt-6 max-w-xl text-[color:var(--sand-soft)]">
              Agende uma reunião reservada com nossos sócios em Uberlândia ou por videoconferência.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center border border-[color:var(--sand)] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--paper)] transition-colors hover:bg-[color:var(--sand)] hover:text-[color:var(--ink)]"
            >
              Fale conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
