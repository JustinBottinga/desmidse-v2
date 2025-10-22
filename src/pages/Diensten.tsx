import { useParams, Link } from "react-router-dom";
import { services } from "@/lib/diensten";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

function slugFromHref(href: string) {
  const parts = href.split("/").filter(Boolean);
  return parts[parts.length - 1] || "";
}

const contentBySlug: Record<
  string,
  {
    title: string;
    subtitle: string;
    intro: string;
    paragraphs: string[];
    heroImage: string;
  }
> = services.reduce((acc, s) => {
  const slug = slugFromHref(s.href);
  acc[slug] = {
    title: s.label,
    subtitle: "De Smidse BTA",
    intro: `${s.label} door De Smidse BTA. Praktisch, duidelijk en onafhankelijk advies.`,
    heroImage: "/media/hero-placeholder.svg",
    paragraphs: [
      `Wij helpen u met ${s.label.toLowerCase()} met oog voor detail en context.`,
      `Na de inspectie ontvangt u een heldere rapportage met concrete aandachtspunten en vervolgstappen.`,
    ],
  };
  return acc;
}, {} as Record<string, { title: string; subtitle: string; intro: string; paragraphs: string[]; heroImage: string }>);

export default function Diensten() {
  const { slug } = useParams<{ slug?: string }>();
  const activeSlug = slug ?? "";
  const active = activeSlug ? contentBySlug[activeSlug] : undefined;

  return (
    <>
      {/* Hero for active dienst */}
      {active && (
        <Hero
          image={active.heroImage}
          title={active.title}
          subtitle={active.subtitle}
          paragraph={active.intro}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {/* Page header (overview only) */}
        {!active && (
          <header className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Onze diensten</h1>
            <p className="text-muted-foreground max-w-2xl">
              Bouwtechnisch advies en woninginspecties voor particulieren en
              bedrijven.
            </p>
          </header>
        )}

        {/* Services nav removed as requested */}

        {/* Content area */}
        {active ? (
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="md:col-span-2 space-y-4">
              {active.paragraphs.map((p, i) => (
                <p key={i} className="text-foreground/90 leading-7">
                  {p}
                </p>
              ))}
            </article>
            <aside className="space-y-4">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h3 className="font-semibold mb-2">Direct contact</h3>
                <div className="flex flex-col gap-2">
                  <a href="tel:0629080748">
                    <Button>Bel 06 290 80 748</Button>
                  </a>
                  <a href="mailto:info@desmidse-bta.nl">
                    <Button variant="outline">Mail</Button>
                  </a>
                </div>
              </div>
            </aside>
          </section>
        ) : (
          <section className="space-y-6">
            <h2 className="text-xl font-semibold">Kies een dienst</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => (
                <Link
                  to={s.href}
                  key={s.href}
                  className="rounded-lg border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="font-semibold">{s.label}</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Meer over {s.label.toLowerCase()}.
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
