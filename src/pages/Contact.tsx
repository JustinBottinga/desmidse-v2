import contact from "@/content/pages/contact.json";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Contact() {
  usePageMeta({ titel: contact.titel }, "/contact");

  const address = `${contact.adres.straat}, ${contact.adres.postcode} ${contact.adres.plaats}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <hr className="mb-8 md:mb-16" />

      <div className="grid gap-8 lg:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="order-last h-full overflow-hidden rounded-xl lg:order-none border border-border bg-muted/30">
          <iframe
            title="Locatie De Smidse BTA"
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&z=14&output=embed`}
            className="h-full min-h-[320px] sm:min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="max-w-lg space-y-8 md:space-y-12 lg:ml-auto">
          <h1 className="font-display text-4xl font-bold tracking-tight md:text-5xl">
            {contact.titel}
          </h1>

          <section className="space-y-4">
            <h2 className="font-display text-2xl font-bold">
              {contact.openingstijden.kop}
            </h2>
            {contact.openingstijden.regels.map((regel) => (
              <p key={regel} className="text-muted-foreground">
                {regel}
              </p>
            ))}
          </section>

          <hr />

          <section className="space-y-3 text-base text-muted-foreground">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
              {contact.adres.kop}
            </p>
            <p>{contact.adres.bedrijfsnaam}</p>
            <p>{contact.adres.straat}</p>
            <p>
              {contact.adres.postcode}&nbsp; {contact.adres.plaats}
            </p>

            <div className="space-y-1 pt-2">
              <p>
                <span className="inline-block w-[4.5rem] text-muted-foreground">
                  e-mail
                </span>
                :{" "}
                <a
                  href={`mailto:${contact.gegevens.email}`}
                  className="text-link underline decoration-link/40 underline-offset-4 hover:decoration-link"
                >
                  {contact.gegevens.email}
                </a>
              </p>
              <p>
                <span className="inline-block w-[4.5rem] text-muted-foreground">
                  telefoon
                </span>
                :{" "}
                <a
                  href={`tel:${contact.gegevens.telefoonNummer}`}
                  className="text-link underline decoration-link/40 underline-offset-4 hover:decoration-link"
                >
                  {contact.gegevens.telefoon}
                </a>
              </p>
              <p>
                <span className="inline-block w-[4.5rem] text-muted-foreground">
                  KvK
                </span>
                : {contact.gegevens.kvk}
              </p>
            </div>
          </section>
        </div>
      </div>

      <hr className="mt-8 md:mt-16" />
    </div>
  );
}
