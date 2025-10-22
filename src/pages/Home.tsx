import { Button } from "@/components/ui/button";
import { Building2, ClipboardList, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* Increased spacing with my-20 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Services Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-10 w-10 bg-blue-500 text-white p-2 rounded" />
              <h2 className="text-xl font-bold">De Smidse BTA</h2>
            </div>
            <p className="text-slate-800">Ontzorgt u op het gebied van:</p>
            <ul className="space-y-2 text-slate-800">
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

          {/* Main Content Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-10 w-10 bg-blue-500 text-white p-2 rounded" />
              <h2 className="text-xl font-bold">Wij werken voor</h2>
            </div>
            <p className="text-slate-800">Bedrijven en particulieren</p>
            <p className="text-slate-800 leading-7">
              De Smidse BTA voert diverse bouwtechnische keuringen uit voor
              particulieren en bedrijven. Wij bieden het gemak en efficiëntie
              binnen het kopen, verkopen, verhuizen, verbouwen of onderhoud aan
              uw woning of bedrijfspand. De Smidse BTA is het aanspreekpunt voor
              alle diensten die worden aangeboden tijdens dit proces. Wij houden
              u op de hoogte van de voortgang van alle stappen die aan bod
              komen.
            </p>
          </div>

          {/* Contact Section (redesigned) */}
          <section className="rounded-lg border bg-card text-card-foreground">
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="text-lg font-semibold">Direct contact</h2>
              </div>
              <p className="text-sm text-muted-foreground">
                Vermijd discussies en extra kosten. Bel gerust voor direct
                advies.
              </p>
              <div className="space-y-1">
                <a
                  href="tel:0629080748"
                  className="block text-2xl font-bold tracking-tight text-foreground"
                >
                  06 290 80 748
                </a>
                <a
                  href="mailto:info@desmidsebta.nl"
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  info@desmidsebta.nl
                </a>
              </div>
              <div className="pt-2">
                <a href="tel:0629080748" className="inline-block w-full">
                  <Button className="w-full" size="lg">
                    Bel nu
                  </Button>
                </a>
              </div>
              <p className="text-xs text-muted-foreground">
                Bereikbaar op werkdagen. We denken graag mee over een passende
                oplossing.
              </p>
            </div>
          </section>
        </div>
      </div>

      {/* Added my-20 for increased spacing */}
      {/* <div className="my-20">
        <CertificationSlider
          certifications={certifications.docs.map((cert) => ({
            ...cert,
            url:
              typeof cert.image === "object" && cert.image !== null
                ? cert.image.url || ""
                : "", // Default to an empty string if url is null or undefined
          }))}
        />
      </div> */}
    </div>
  );
}
