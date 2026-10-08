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
                <h2 className="my-10 text-3xl font-bold leading-tight md:text-4xl">
                  {sectie.kop}
                </h2>
              ) : null}

              {sectie.intro ? (
                <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                  {sectie.intro}
                </p>
              ) : null}

              {kolommen.length ? (
                <ColumnGrid>
                  {kolommen.map((kolom, kolomIndex) => (
                    <div key={kolomIndex}>
                      {kolom.label ? (
                        <h3 className="mb-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
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
                    kolommen.length ? "mt-8" : "max-w-3xl"
                  )}
                >
                  <Markdown>{sectie.tekst}</Markdown>
                </div>
              ) : null}
            </section>

            {sectie.scheidingslijn ? <hr className="border-border" /> : null}
          </div>
        );
      })}
    </div>
  );
}
