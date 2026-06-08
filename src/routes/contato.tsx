import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, SectionLabel } from "@/components/section";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Signorelli Sociedade de Advogados" },
      { name: "description", content: "Fale com a Signorelli Sociedade de Advogados em Uberlândia/MG. Telefones, e-mail e endereço do escritório." },
      { property: "og:title", content: "Contato — Signorelli" },
      { property: "og:description", content: "Telefones, e-mail e endereço do escritório em Uberlândia/MG." },
    ],
  }),
  component: ContatoPage,
});

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)]/70">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full border-b border-[color:var(--line)] bg-transparent py-2 text-[color:var(--ink)] focus:border-[color:var(--ink)] focus:outline-none"
      />
    </div>
  );
}

function ContatoPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar."
        intro="Atendimento presencial em Uberlândia/MG ou por videoconferência. Retornamos em até um dia útil."
      />

      <section className="border-t border-[color:var(--line)]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-5 space-y-10">
            <div>
              <SectionLabel number="01">Telefones</SectionLabel>
              <div className="mt-5 space-y-2 font-display text-2xl text-[color:var(--ink)]">
                <a className="block hover:text-[color:var(--sand)]" href="tel:+553434587342">(34) 3458-7342</a>
                <a className="block hover:text-[color:var(--sand)]" href="tel:+5534972638705">(34) 97263-8705</a>
              </div>
            </div>
            <div>
              <SectionLabel number="02">E-mail</SectionLabel>
              <a className="mt-5 block font-display text-2xl text-[color:var(--ink)] hover:text-[color:var(--sand)]" href="mailto:contato@signorelliadv.com">
                contato@signorelliadv.com
              </a>
            </div>
            <div>
              <SectionLabel number="03">Endereço</SectionLabel>
              <address className="mt-5 not-italic text-base leading-relaxed text-[color:var(--ink)]/85">
                Av. Maria Silva Garcia, n° 575<br />
                13º andar, sala 1311 — Innovatti Center<br />
                Granja Marileusa<br />
                Uberlândia/MG · CEP 38406-634
              </address>
            </div>
          </div>

          <form
            className="md:col-span-7 space-y-6 border border-[color:var(--line)] bg-white p-10"
            action="mailto:contato@signorelliadv.com"
            method="post"
            encType="text/plain"
          >
            <SectionLabel number="04">Envie uma mensagem</SectionLabel>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Nome" name="nome" />
              <Field label="E-mail" name="email" type="email" />
              <Field label="Telefone" name="telefone" />
              <Field label="Empresa" name="empresa" />
            </div>
            <Field label="Assunto" name="assunto" />
            <div>
              <label className="block text-[11px] uppercase tracking-[0.25em] text-[color:var(--ink)]/70">Mensagem</label>
              <textarea
                name="mensagem"
                rows={5}
                className="mt-2 w-full border-b border-[color:var(--line)] bg-transparent py-2 text-[color:var(--ink)] focus:border-[color:var(--ink)] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[color:var(--ink)] px-8 py-4 text-[11px] uppercase tracking-[0.25em] text-[color:var(--paper)] hover:bg-[color:var(--ink)]/90"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="aspect-[16/7] w-full overflow-hidden border border-[color:var(--line)]">
            <iframe
              title="Mapa Signorelli Sociedade de Advogados"
              src="https://www.google.com/maps?q=Av.%20Maria%20Silva%20Garcia%2C%20575%2C%20Uberl%C3%A2ndia%2C%20MG&output=embed"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}