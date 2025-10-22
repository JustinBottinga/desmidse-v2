import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

export default function About() {
  return (
    <>
      <Hero
        image="/media/hero-placeholder.svg"
        title="Over ons"
        subtitle="De Smidse BTA"
        paragraph="Bouwtechnisch advies en woninginspecties voor particulieren en bedrijven."
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Two columns: text + image placeholder */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-slate-800 leading-7">
              Mijn naam is Jeroen Klikkert en in 2022 ben ik begonnen met De
              Smidse BTA. We richten ons op diverse woningkeuringen en
              inspecties.
            </p>
            <p className="text-slate-800 leading-7">
              Of het nu gaat om een aankoop- of verkoopkeuring, een
              opleveringskeuring of controle tijdens de (ver)bouw, we helpen u
              graag met helder advies.
            </p>
            <p className="text-slate-800 leading-7">
              Ook voor verduurzamingsadvies en energielabels kunt u bij ons
              terecht.
            </p>
          </div>
          <div className="rounded-lg border bg-card shadow-sm h-64 md:h-80" />
        </section>

        {/* Waar ik voor sta */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Waar ik voor sta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-lg border bg-card p-6 shadow-sm space-y-2">
              <h3 className="font-semibold">Zorgvuldig</h3>
              <p className="text-sm text-muted-foreground">
                Grondige inspecties met aandacht voor detail en context.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm space-y-2">
              <h3 className="font-semibold">Onafhankelijk</h3>
              <p className="text-sm text-muted-foreground">
                Een eerlijk en helder beeld, zonder omwegen of aannames.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm space-y-2">
              <h3 className="font-semibold">Duidelijk</h3>
              <p className="text-sm text-muted-foreground">
                Advies waar u vandaag iets aan heeft en morgen op kunt bouwen.
              </p>
            </div>
          </div>
        </section>

        {/* CTA banner */}
        <section>
          <div className="rounded-lg border bg-muted/40 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-semibold">
                Vragen of direct een inspectie plannen?
              </h3>
              <p className="text-sm text-muted-foreground">
                Ik help u graag verder.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a href="tel:0629080748">
                <Button>Bel 06 290 80 748</Button>
              </a>
              <a href="mailto:info@desmidse-bta.nl">
                <Button variant="outline">Mail</Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
