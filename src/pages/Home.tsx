import { Button } from "@/components/ui/button";
import { Building2, ClipboardList } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-10 w-10 bg-blue-500 text-white p-2 rounded" />
              <h2 className="text-xl font-bold">De Smidse BTA</h2>
            </div>
            <p className="text-slate-800">Ontzorgt u op het gebied van:</p>
            <ul className="space-y-2 text-slate-800 text-sm">
              <li>• Bouwtechnisch advies</li>
              <li>• Aan- en verkoopkeuring</li>
              <li>• Meeloopkeuring</li>
              <li>• Opleveringskeuring</li>
              <li>• Nulmeting</li>
              <li>• Bouwkundig consult</li>
              <li>• Controle tijdens de (ver)bouw</li>
              <li>• Integraal woning inspectie (IWI) NTA 8060</li>
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-10 w-10 bg-blue-500 text-white p-2 rounded" />
              <div>
                <h2 className="text-xl font-bold">Wij werken voor</h2>
                <p className="text-slate-500 text-sm">
                  Bedrijven en particulieren
                </p>
              </div>
            </div>
            <p className="text-slate-800 leading-7 text-sm">
              De Smidse BTA voert diverse bouwtechnische keuringen uit voor
              particulieren en bedrijven. Wij bieden het gemak en efficientie
              binnen het kopen, verkopen, verhuizen, verbouwen of onderhoud aan
              uw woning of bedrijfspand. De Smidse BTA is het aanspreekpunt voor
              alle diensten die worden aangeboden tijdens dit proces. Wij houden
              u op de hoogte van de voortgang van alle stappen die aan bod
              komen.
            </p>
          </div>

          <section className="rounded bg-blue-600 text-white p-6 space-y-4">
            <p className="text-sm font-medium">Vermijd discussies en kosten</p>
            <a href="tel:0629080748" className="block text-2xl font-bold">
              Bel 06-29080748
            </a>
            <p className="text-sm text-blue-100">
              Ik sta u graag te woord en samen komen we tot een mooie oplossing.
            </p>
            <a href="tel:0629080748" className="inline-block pt-2">
              <Button variant="secondary">Bel nu</Button>
            </a>
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          De branche erkende keurmerken van
          <br />
          De Smidse BTA
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              IWI Woning Inspecteurs
            </h3>
            <p className="text-sm leading-7 text-foreground/90">
              Het uitvoeren van inspecties is belangrijk en goed inzicht te
              geven in de staat van onderhoud van een woning. De kwaliteit van
              de uitgevoerde inspectie is daartoe van groot belang. De gevolgen
              van een rapport zijn immers groot. Elk bouwkundig rapport moet een
              inspecteur aantoonbaar competent zijn en blijven op alle voor de
              inspectie relevante gebieden.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Instituut Onderhoudsdiendingers
            </h3>
            <p className="text-sm leading-7 text-foreground/90">
              Sertium is het enige onafhankelijke register voor erkende
              onderhoudstechnisch deskundigen in Nederland. Onze vakbekwaamheid
              staat onze kwaliteit in alles wat we doen. Onafhankelijkheid is
              belangrijk voor ons. De operationele taken van Sertium worden door
              een stichtingbureau uitgevoerd onder toezicht van het bestuur.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Certificerende Onderhoudsverzekeringen
            </h3>
            <p className="text-sm leading-7 text-foreground/90">
              Sertium heeft duo het continu verbeteren van het niveau van
              vastgoedonderhoud als technisch beheer. De deskundigheid van de
              onderhoudsprofessionals die in het Sertium register als
              thuisinspecteur wordt gewaarborgd via de competentieaanwijzingen.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              Licentie Keurmerk
            </h3>
            <p className="text-sm leading-7 text-foreground/90">
              Actuele keurmerken en periodieke controle helpen om de kwaliteit
              en betrouwbaarheid van inspecties te waarborgen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
