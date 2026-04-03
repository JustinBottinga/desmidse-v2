export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <hr className="mb-16" />

      <div className="max-w-lg ml-auto space-y-12">
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

          <div className="pt-2 space-y-1">
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

      <hr className="mt-16" />
    </div>
  );
}
