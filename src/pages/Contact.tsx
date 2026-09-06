export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <hr className="mb-16" />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="h-full overflow-hidden rounded-2xl border border-border bg-muted/30">
          <iframe
            title="Locatie De Smidse BTA"
            src="https://www.google.com/maps?q=Smidsstraat%2030%207686%20BL%20Daarlerveen&z=14&output=embed"
            className="h-full min-h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="max-w-lg space-y-12 lg:ml-auto">
          <h1 className="text-3xl font-light tracking-tight">Contact</h1>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Openingstijden</h2>
            <p className="text-foreground/80">Maandag t/m vrijdag</p>
            <p className="text-foreground/80">van 08:00 t/m 19:00 uur</p>
          </section>

          <hr />

          <section className="space-y-3 text-sm text-foreground/80">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Adres
            </p>
            <p>De Smidse BTA</p>
            <p>Smidsstraat 30</p>
            <p>7686 BL&nbsp; Daarlerveen</p>

            <div className="space-y-1 pt-2">
              <p>
                <span className="inline-block w-20 text-muted-foreground">
                  e-mail
                </span>
                :{" "}
                <a
                  href="mailto:info@desmidsebta.nl"
                  className="text-blue-600 hover:underline"
                >
                  info@desmidsebta.nl
                </a>
              </p>
              <p>
                <span className="inline-block w-20 text-muted-foreground">
                  telefoon
                </span>
                :{" "}
                <a
                  href="tel:0629080748"
                  className="text-blue-600 hover:underline"
                >
                  06 290 80 748
                </a>
              </p>
              <p>
                <span className="inline-block w-20 text-muted-foreground">
                  KvK
                </span>
                : 08159387
              </p>
            </div>
          </section>

          <div>
            <a
              href="/media/algemene-leveringsvoorwaarden.pdf"
              className="text-sm text-blue-600 hover:underline"
            >
              Download hier een kopie van onze algemene leveringsvoorwaarden
            </a>
          </div>
        </div>
      </div>

      <hr className="mt-16" />
    </div>
  );
}
