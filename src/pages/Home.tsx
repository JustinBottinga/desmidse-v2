import { Button } from "@/components/ui/button";
import Markdown from "@/components/Markdown";
import ColumnGrid from "@/components/ColumnGrid";
import LogoStrip from "@/components/LogoStrip";
import { Building2, Check, ClipboardList } from "lucide-react";
import home from "@/content/pages/home.json";
import { usePageMeta } from "@/lib/usePageMeta";

export default function Home() {
  usePageMeta({}, "/");

  return (
    <div className="bg-background">
      <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 md:my-20 lg:px-8">
        <h1 className="sr-only">De Smidse BTA</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <ClipboardList
                aria-hidden="true"
                className="h-11 w-11 shrink-0 rounded-lg bg-foreground p-2.5 text-primary"
              />
              <h2 className="text-xl font-bold md:text-2xl">
                {home.dienstenKaart.titel}
              </h2>
            </div>
            <p className="text-base leading-7 text-foreground">
              {home.dienstenKaart.intro}
            </p>
            <ul className="space-y-2 text-base text-foreground">
              {home.dienstenKaart.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <Check
                    aria-hidden="true"
                    className="mt-1 h-4 w-4 shrink-0 text-foreground"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Building2
                aria-hidden="true"
                className="h-11 w-11 shrink-0 rounded-lg bg-foreground p-2.5 text-primary"
              />
              <div>
                <h2 className="text-xl font-bold md:text-2xl">
                  {home.overKaart.titel}
                </h2>
                <p className="text-base text-muted-foreground">
                  {home.overKaart.subtitel}
                </p>
              </div>
            </div>
            <p className="text-base leading-7 text-foreground">
              {home.overKaart.tekst}
            </p>
          </div>

          <section className="space-y-4 rounded-xl bg-primary p-6 text-primary-foreground md:col-span-2 lg:col-span-1">
            <p className="text-base font-semibold">{home.belKaart.kop}</p>
            <a
              href={`tel:${home.belKaart.telefoonNummer}`}
              className="block font-display text-3xl font-bold"
            >
              {home.belKaart.telefoonLabel}
            </a>
            <p className="text-base text-primary-foreground">
              {home.belKaart.tekst}
            </p>
            <Button asChild variant="secondary" className="mt-2">
              <a href={`tel:${home.belKaart.telefoonNummer}`}>
                {home.belKaart.knopLabel}
              </a>
            </Button>
          </section>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <h2 className="mb-10 text-center text-3xl font-bold leading-tight md:text-4xl">
          {home.keurmerken.kop}
        </h2>
        <ColumnGrid>
          {home.keurmerken.kolommen.map((kolom) => (
            <div key={kolom.label}>
              <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {kolom.label}
              </h3>
              <Markdown>{kolom.tekst}</Markdown>
            </div>
          ))}
        </ColumnGrid>
        <LogoStrip logos={home.keurmerken.logos} />
      </div>
    </div>
  );
}
