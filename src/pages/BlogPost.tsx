import Hero from "@/components/Hero";
import Markdown from "@/components/Markdown";
import { getBlogPostBySlug } from "@/lib/content";
import { Link, useParams } from "react-router-dom";

function formatDate(dateString: string) {
  if (!dateString) return "";
  return new Intl.DateTimeFormat("nl-NL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(dateString));
}

export default function BlogPost() {
  const { slug = "" } = useParams();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-4">
        <h1 className="text-2xl font-semibold">Bericht niet gevonden</h1>
        <p className="text-muted-foreground">Dit blogbericht bestaat niet.</p>
        <Link to="/blog" className="text-primary underline">
          Terug naar blog
        </Link>
      </div>
    );
  }

  const published = formatDate(post.date);

  return (
    <div>
      <Hero
        image={post.image ?? "/media/uploads/hero-placeholder.svg"}
        title={post.title}
        subtitle={published ? `Blog · ${published}` : "Blog"}
        paragraph={post.excerpt}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="space-y-6">
          <Markdown>{post.body}</Markdown>
          <div>
            <Link
              to="/blog"
              className="text-sm font-medium text-blue-700 hover:underline"
            >
              Terug naar overzicht
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
