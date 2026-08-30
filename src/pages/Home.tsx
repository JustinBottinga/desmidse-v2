import { Button } from "@/components/ui/button";
import Markdown from "@/components/Markdown";
import { Building2, ClipboardList } from "lucide-react";
import home from "@/content/pages/home.json";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <ClipboardList className="h-10 w-10 bg-blue-500 text-white p-2 rounded" />
              <h2 className="text-xl font-bold">{home.dienstenKaart.titel}</h2>
            </div>
            <p className="text-slate-800">{home.dienstenKaart.intro}</p>
            <ul className="space-y-2 text-slate-800 text-sm">
              {home.dienstenKaart.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Building2 className="h-10 w-10 bg-blue-500 text-white p-2 rounded" />
              <div>
                <h2 className="text-xl font-bold">{home.overKaart.titel}</h2>
                <p className="text-slate-500 text-sm">
                  {home.overKaart.subtitel}
                </p>
              </div>
            </div>
            <p className="text-slate-800 leading-7 text-sm">
              {home.overKaart.tekst}
            </p>
          </div>

          <section className="rounded bg-blue-600 text-white p-6 space-y-4">
            <p className="text-sm font-medium">{home.belKaart.kop}</p>
            <a
              href={`tel:${home.belKaart.telefoonNummer}`}
              className="block text-2xl font-bold"
            >
              {home.belKaart.telefoonLabel}
            </a>
            <p className="text-sm text-blue-100">{home.belKaart.tekst}</p>
            <a
              href={`tel:${home.belKaart.telefoonNummer}`}
              className="inline-block pt-2"
            >
              <Button variant="secondary">{home.belKaart.knopLabel}</Button>
            </a>
          </section>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          {home.keurmerken.kop}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {home.keurmerken.kolommen.map((kolom) => (
            <div key={kolom.label}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                {kolom.label}
              </h3>
              <Markdown>{kolom.tekst}</Markdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
