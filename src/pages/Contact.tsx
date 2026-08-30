import contact from "@/content/pages/contact.json";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <hr className="mb-16" />

      <div className="max-w-lg ml-auto space-y-12">
        <h1 className="text-3xl font-light tracking-tight">{contact.titel}</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">{contact.openingstijden.kop}</h2>
          {contact.openingstijden.regels.map((regel) => (
            <p key={regel} className="text-foreground/80">
              {regel}
            </p>
          ))}
        </section>

        <hr />

        <section className="space-y-3 text-sm text-foreground/80">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {contact.adres.kop}
          </p>
          <p>{contact.adres.bedrijfsnaam}</p>
          <p>{contact.adres.straat}</p>
          <p>
            {contact.adres.postcode}&nbsp;&nbsp;{contact.adres.plaats}
          </p>

          <div className="pt-2 space-y-1">
            <p>
              <span className="inline-block w-20 text-muted-foreground">
                e-mail
              </span>
              :{" "}
              <a
                href={`mailto:${contact.gegevens.email}`}
                className="text-blue-600 hover:underline"
              >
                {contact.gegevens.email}
              </a>
            </p>
            <p>
              <span className="inline-block w-20 text-muted-foreground">
                telefoon
              </span>
              :{" "}
              <a
                href={`tel:${contact.gegevens.telefoonNummer}`}
                className="text-blue-600 hover:underline"
              >
                {contact.gegevens.telefoon}
              </a>
            </p>
            <p>
              <span className="inline-block w-20 text-muted-foreground">
                KvK
              </span>
              : {contact.gegevens.kvk}
            </p>
          </div>
        </section>

        {contact.document.bestand ? (
          <div>
            <a
              href={contact.document.bestand}
              className="text-sm text-blue-600 hover:underline"
            >
              {contact.document.label}
            </a>
          </div>
        ) : null}
      </div>

      <hr className="mt-16" />
    </div>
  );
}
