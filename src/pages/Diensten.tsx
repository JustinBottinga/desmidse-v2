import { useParams, Link } from "react-router-dom";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import { diensten, getDienstBySlug } from "@/lib/content";
import overzicht from "@/content/pages/diensten.json";

export default function Diensten() {
  const { slug } = useParams<{ slug?: string }>();
  const dienst = slug ? getDienstBySlug(slug) : undefined;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {!dienst && (
          <>
            <header className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                {overzicht.titel}
              </h1>
              <p className="text-muted-foreground max-w-2xl">
                {overzicht.intro}
              </p>
            </header>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {diensten.map((item) => (
                <Link
                  to={`/diensten/${item.slug}`}
                  key={item.slug}
                  className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-semibold">{item.menuLabel}</div>
                  <p className="text-sm text-muted-foreground mt-1">
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
