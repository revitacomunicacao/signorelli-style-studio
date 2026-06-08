import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { PageHeader, SectionLabel } from "@/components/section";
import { AnimateIn } from "@/components/animate-in";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Signorelli Sociedade de Advogados" },
      {
        name: "description",
        content: "Fale com a Signorelli Sociedade de Advogados em Uberlândia/MG. Telefones, e-mail e endereço do escritório.",
      },
      { property: "og:title", content: "Contato — Signorelli" },
      { property: "og:description", content: "Telefones, e-mail e endereço do escritório em Uberlândia/MG." },
    ],
  }),
  component: ContatoPage,
});

function ContatoPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar."
        intro="Atendimento presencial em Uberlândia/MG ou por videoconferência."
      />

      <section className="border-t border-[color:var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          <AnimateIn variant="fade-up">
            <div className="group card-hover h-full rounded-sm border border-[color:var(--line)] bg-[color:var(--paper)] p-8">
              <SectionLabel number="01">Telefones</SectionLabel>
              <div className="mt-6 space-y-4">
                {[
                  { tel: "+553434587342", display: "(34) 3458-7342" },
                  { tel: "+5534972638705", display: "(34) 97263-8705" },
                ].map((p) => (
                  <a
                    key={p.tel}
                    href={`tel:${p.tel}`}
                    className="flex items-center gap-3 font-display text-2xl text-[color:var(--ink)] transition-colors hover:text-[color:var(--sand)]"
                  >
                    <Phone className="h-5 w-5 text-[color:var(--sand)]" strokeWidth={1.25} />
                    {p.display}
                  </a>
                ))}
              </div>
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={100}>
            <div className="group card-hover h-full rounded-sm border border-[color:var(--line)] bg-[color:var(--paper)] p-8">
              <SectionLabel number="02">E-mail</SectionLabel>
              <a
                href="mailto:contato@signorelliadv.com"
                className="mt-6 flex items-center gap-3 font-display text-xl text-[color:var(--ink)] transition-colors hover:text-[color:var(--sand)] md:text-2xl"
              >
                <Mail className="h-5 w-5 shrink-0 text-[color:var(--sand)]" strokeWidth={1.25} />
                contato@signorelliadv.com
              </a>
            </div>
          </AnimateIn>

          <AnimateIn variant="fade-up" delay={200}>
            <div className="group card-hover h-full rounded-sm border border-[color:var(--line)] bg-[color:var(--paper)] p-8">
              <SectionLabel number="03">Endereço</SectionLabel>
              <address className="mt-6 flex gap-3 not-italic text-base leading-relaxed text-[color:var(--ink)]/85">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[color:var(--sand)]" strokeWidth={1.25} />
                <span>
                  Av. Maria Silva Garcia, n° 575<br />
                  13º andar, sala 1311 — Innovatti Center<br />
                  Granja Marileusa<br />
                  Uberlândia/MG · CEP 38406-634
                </span>
              </address>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)]">
        <AnimateIn variant="fade-up">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <div className="img-reveal aspect-[16/7] w-full overflow-hidden border border-[color:var(--line)] shadow-[0_8px_40px_-16px_rgba(65,68,68,0.1)]">
              <iframe
                title="Mapa Signorelli Sociedade de Advogados"
                src="https://www.google.com/maps?q=Av.%20Maria%20Silva%20Garcia%2C%20575%2C%20Uberl%C3%A2ndia%2C%20MG&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}
