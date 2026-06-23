type PageFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
};

export type BlogPost = PageFrontmatter & {
  slug: string;
  body: string;
};

function parseMarkdown(source: string, slug: string): BlogPost {
  const frontmatterMatch = source.match(
    /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?([\s\S]*)$/
  );

  const frontmatterLines = frontmatterMatch?.[1].split(/\r?\n/) ?? [];
  const content = frontmatterMatch?.[2] ?? source;

  const frontmatter = frontmatterLines.reduce<Partial<PageFrontmatter>>(
    (accumulator, line) => {
      const trimmedLine = line.trim();
      if (!trimmedLine) return accumulator;

      const separatorIndex = trimmedLine.indexOf(":");
      if (separatorIndex === -1) return accumulator;

      const key = trimmedLine.slice(0, separatorIndex).trim();
      const rawValue = trimmedLine.slice(separatorIndex + 1).trim();
      const value = rawValue.replace(/^['"]|['"]$/g, "");

      if (key === "title" || key === "excerpt" || key === "date" || key === "image") {
        accumulator[key] = value;
      }

      return accumulator;
    },
    {}
  );

  return {
    slug,
    title: frontmatter.title ?? "Blog",
    excerpt: frontmatter.excerpt ?? "",
    date: frontmatter.date ?? "",
    image: frontmatter.image ?? "/media/hero-placeholder.svg",
    body: content.trimStart(),
  };
}

const blogFiles = import.meta.glob<string>("../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function dateValue(date: string) {
  const value = new Date(date).getTime();
  return Number.isNaN(value) ? 0 : value;
}

export const blogPosts: BlogPost[] = Object.entries(blogFiles)
  .map(([filePath, source]) => {
    const fileName = filePath.split("/").pop() ?? "";
    const slug = fileName.replace(/\.md$/, "");
    return parseMarkdown(source, slug);
  })
  .sort((a, b) => dateValue(b.date) - dateValue(a.date));

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
