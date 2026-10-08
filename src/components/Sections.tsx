import Markdown from "@/components/Markdown";
import ColumnGrid from "@/components/ColumnGrid";
import { cn } from "@/lib/utils";
import type { ContentSection } from "@/lib/content";

export default function Sections({ secties }: { secties?: ContentSection[] }) {
  if (!secties?.length) return null;

  return (
    <div className="space-y-16">
      {secties.map((sectie, index) => {
        const kolommen = sectie.kolommen ?? [];

        return (
          <div key={index} className="space-y-16">
            <section>
              {sectie.kop ? (
                <h2 className="text-2xl md:text-3xl font-bold text-center my-10">
                  {sectie.kop}
                </h2>
              ) : null}

              {sectie.intro ? (
                <p className="text-sm text-muted-foreground mb-8">
                  {sectie.intro}
                </p>
              ) : null}

              {kolommen.length ? (
                <ColumnGrid>
                  {kolommen.map((kolom, kolomIndex) => (
                    <div key={kolomIndex}>
                      {kolom.label ? (
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
                          {kolom.label}
                        </h3>
                      ) : null}
                      <Markdown>{kolom.tekst}</Markdown>
                    </div>
                  ))}
                </ColumnGrid>
              ) : null}

              {sectie.tekst ? (
                <div
                  className={cn(
                    kolommen.length ? "mt-8" : "max-w-3xl mx-auto"
                  )}
                >
                  <Markdown>{sectie.tekst}</Markdown>
                </div>
              ) : null}
            </section>

            {sectie.scheidingslijn ? <hr /> : null}
          </div>
        );
      })}
    </div>
  );
}
