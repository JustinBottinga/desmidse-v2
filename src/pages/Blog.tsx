import Hero from "@/components/Hero";
import { blogPosts } from "@/lib/content";
import { Link } from "react-router-dom";

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function Blog() {
  const latest = blogPosts[0];

  return (
    <div>
      <Hero
        image={latest?.image ?? "/media/hero-placeholder.svg"}
        title="Blog"
        subtitle="Nieuws en inzichten"
        paragraph="Beheer deze berichten in Decap CMS onder /admin."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {blogPosts.length === 0 ? (
          <div className="rounded-xl border border-dashed p-8 text-center">
            <h2 className="text-xl font-semibold">Nog geen berichten</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Voeg je eerste blogbericht toe via /admin.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => {
              const published = formatDate(post.date);
              return (
                <article key={post.slug} className="rounded-2xl border bg-white p-6">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    {published || "Onbekende datum"}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    <Link to={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  {post.excerpt ? (
                    <p className="mt-3 text-sm leading-7 text-foreground/80">
                      {post.excerpt}
                    </p>
                  ) : null}
                  <div className="mt-4">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-sm font-medium text-blue-700 hover:underline"
                    >
                      Lees bericht
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}