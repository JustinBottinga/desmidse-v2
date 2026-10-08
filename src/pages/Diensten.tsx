import { useParams, Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import { diensten, getDienstBySlug } from "@/lib/content";
import { usePageMeta } from "@/lib/usePageMeta";
import overzicht from "@/content/pages/diensten.json";

export default function Diensten() {
  const { slug } = useParams<{ slug?: string }>();
  const dienst = slug ? getDienstBySlug(slug) : undefined;

  usePageMeta(
    dienst ?? overzicht,
    dienst ? `/diensten/${dienst.slug}` : "/diensten",
  );

  return (
    <>
      {dienst && (
        <Hero
          image={dienst.afbeelding ?? "/media/uploads/hero-placeholder.svg"}
          title={dienst.titel}
          subtitle={dienst.subtitel}
          paragraph={dienst.intro}
        />
      )}

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        {!dienst && (
          <>
            <header className="space-y-3">
              <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight md:text-5xl lg:text-6xl">
                {overzicht.titel}
              </h1>
              <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                {overzicht.intro}
              </p>
            </header>
            <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {diensten.map((item) => (
                <Link
                  to={`/diensten/${item.slug}`}
                  key={item.slug}
                  className="rounded-xl border border-border bg-card p-6 shadow-sm transition-colors hover:border-foreground"
                >
                  <div className="font-display text-xl font-bold">
                    {item.menuLabel}
                  </div>
                  <p className="mt-1 text-base text-muted-foreground">
                    Meer over {item.menuLabel.toLowerCase()}.
                  </p>
                </Link>
              ))}
            </section>
          </>
        )}

        {dienst && <Sections secties={dienst.secties} />}
      </div>
    </>
  );
}
