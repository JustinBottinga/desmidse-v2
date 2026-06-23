import Hero from "@/components/Hero";
import { getBlogPostBySlug } from "@/lib/content";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const markdownComponents: Components = {
  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="mt-10 text-2xl font-bold tracking-tight text-foreground"
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      {...props}
      className="mt-8 text-xl font-semibold tracking-tight text-foreground"
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="text-sm leading-7 text-foreground/90">
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="space-y-2 pl-5 text-sm leading-7 text-foreground/90"
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="space-y-2 pl-5 text-sm leading-7 text-foreground/90"
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => <li {...props}>{children}</li>,
  a: ({ children, ...props }) => (
    <a
      {...props}
      className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-4 hover:text-blue-900"
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="border-l-4 border-blue-200 pl-4 italic text-foreground/80"
    >
      {children}
    </blockquote>
  ),
};

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
        image={post.image ?? "/media/hero-placeholder.svg"}
        title={post.title}
        subtitle={published ? `Blog · ${published}` : "Blog"}
        paragraph={post.excerpt}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="space-y-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {post.body}
          </ReactMarkdown>
          <div>
            <Link to="/blog" className="text-sm font-medium text-blue-700 hover:underline">
              Terug naar overzicht
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}