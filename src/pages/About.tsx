import Hero from "@/components/Hero";

export default function About() {
  return (
    <>
      <Hero
        image="/media/hero-placeholder.svg"
        title="Over mij"
        subtitle="Jeroen Klikkert"
        paragraph="Mijn naam is Jeroen Klikkert en in 2022 ben ik begonnen met De Smidse BTA. De Smidse is een bouwtechnisch adviesbureau en richt zich op diverse soorten woningkeuringen en inspecties. Of het nu gaat om een aankoop-/verkoopkeuring, een opleveringskeuring, controle tijdens (ver)bouw tot een verduurzamingsadvies rapport of Energielabel, wij regelen het voor u."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Vastgoed section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Vastgoed is waar wij goed in zijn!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Woninginspecteur IWI
              </h3>
              <div className="space-y-4 text-sm leading-7 text-foreground/90">
                <p>
                  Voor IWI woningsinspecteur/inspecteur werd, heb ik ruim 12
                  jaar als schilder gewerkt. Dit is door de jaren heen
                  uitgegroeid tot een bedrijf dat zich niet alleen meer op het
                  schilderwerk ging richten maar ook op herstelwerkzaamheden
                  zoals houtrot, onderhoud en vervanging van glas en diverse
                  houten onderdelen, kozijnen, leiderpen, binnendeuren, restvan
                  en dergelijke.
                </p>
                <p>
                  Door de jarenlange ervaring als schilder heb ik een prima
                  beeld hoe een woning is opgebouwd en wat de leefbare punten
                  zijn. Ook de staat van onderhoud bepalen en goed kunnen
                  beschrijven is voor ons onderdeel routine geworden.
                </p>
                <p>
                  Door het steeds vaker aanlopen in de werkzaamheden van
                  woningen fick mijn horizon vergroot en te gaan studeren voor
                  integraal woningsinspecteur en aansluiting kengerspect
                  bestaande bouw. Na het halen van mijn diplomas ben ik
                  geregistreerd en ingeschreven in het sertium en certigs
                  register. Voor landelijk erkende onderhoudsdienljndigen.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Het Vak
              </h3>
              <div className="space-y-4 text-sm leading-7 text-foreground/90">
                <p>
                  Om mij volledig te kunnen richten op het vak van
                  bouwinspecteur ben ik begonnen met De Smidse BTA. Wij zijn
                  direct nu door enkele jaren bij in Groningen en bij die
                  woningen te inspecteren de schatz hebben opgenomen bij de
                  betreffende aanbieders.
                </p>
                <p>
                  Wij zijn direct nu door enkele punten hier wij in Groningen en
                  bij die woningen te inspecteren de schatz hebben opgenomen bij
                  de betreffende inspecties.
                </p>
                <p>
                  Maar ook vakantierhuizen en woningen die de aankoopkeuring
                  wilden voor hun majesté tizkorupte wonen. Het grootste deel
                  van onze werkzaamheden. Van dit jaar voortaan worden wij
                  jaarlijks ingeteld aan een verduurzamingsadvies te maken. Om
                  die klachten werden door een aannemer-stichtbureau uitgevoerd
                  bij een stichting, groep voor de beperkende woning op te
                  werken voor isolatie en ventilatie.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                Rapporten
              </h3>
              <div className="space-y-4 text-sm leading-7 text-foreground/90">
                <p>
                  De data voor de oude situatie voeren wij in op een
                  softwaresysteem die meerkant en de energietabel die bij de
                  bestaande situatie hoe berekend. Via het verbeterplan te
                  hebben ingreed dan wij direct wat het meest voordeel directe
                  Energielabel gaat worden als de favorieten de
                  verbeterpendingen allemers.
                </p>
                <p>
                  Deze rapporten onderbouwen wij met fotos, meetrapporten,
                  uitsplitsingen en mogelijk subsidies. Op deze manier krijgt
                  een duidelijk beeld van hoe de woning er qua staat van het
                  huis tot slot/fundering met diverse apparatuur kunnen wij tot
                  koming van de bestaande dingen bij die eigen recht zijn als
                  wij geen acht op het.
                </p>
                <p>
                  Mensen vragen mij eens een de meestwaarde is van een
                  bouwkundige keuring. Nou dan is het heel kort over zijn. Wij
                  lopen met een ander blik naar een woning en inspecteurs van
                  ook tot lot fundering met diverse apparatuur kunnen wij tot
                  klein kleven met anderen gericht zijn als wij geen acht op
                  het. Ook meten wij met vochimeter de harten kopers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr />

        {/* Bottom paragraphs */}
        <section className="space-y-4 text-sm leading-7 text-foreground/90 max-w-3xl mx-auto">
          <p>
            Kopers zijn vaak enthousiast en dan ned gebreken niet. Hier komt
            soms echter na de koop and dan kunt u zonder bouwkundige keuring
            vaak voor de kosten opdringen. En dit kan financieel heel erg hard
            oplopen. Daarom advies is het altijd een NHG altijd inspectie met
            NHG garantie. Voor 393 euro incl. BTW wordt u ingedekt tegen kosten
            achteraf en een reap mogelijkheden naar verkopende partij.
            Geldverstrekers vragen ost steeds niet om een bouwkundige keuring
            voor de uitkoste gevers voor een Hypotheek.
          </p>
          <p>
            Voor bouwkundige keuringen, energieadvies, energietabel, nvip, maar
            ook voor kleuringen van het onderhoud van soft-bietenwerk staat ik
            graag voor u klaar.
          </p>
          <p className="font-medium">
            Met vriendelijke groet,
            <br />
            Jeroen Klikkert.
          </p>
        </section>
      </div>
    </>
  );
}
