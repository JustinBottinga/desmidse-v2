import Markdown from "@/components/Markdown";
import { cn } from "@/lib/utils";
import type { ContentSection } from "@/lib/content";

const gridForColumns: Record<number, string> = {
  1: "",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

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
                <div
                  className={cn(
                    "grid grid-cols-1 gap-8",
                    gridForColumns[Math.min(kolommen.length, 4)]
                  )}
                >
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
                </div>
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
