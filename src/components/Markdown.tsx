import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
  h2: ({ children, ...props }) => (
    <h2
      {...props}
      className="mt-10 font-display text-2xl font-bold text-foreground"
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3
      {...props}
      className="mt-8 font-display text-xl font-bold text-foreground md:text-2xl"
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} className="mt-6 font-semibold text-foreground">
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="text-base leading-7 text-muted-foreground">
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="list-disc space-y-2 pl-5 text-base leading-7 text-muted-foreground marker:text-foreground/60"
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="list-decimal space-y-2 pl-5 text-base leading-7 text-muted-foreground marker:text-foreground/60"
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => <li {...props}>{children}</li>,
  strong: ({ children, ...props }) => (
    <strong {...props} className="font-bold text-foreground">
      {children}
    </strong>
  ),
  a: ({ children, ...props }) => (
    <a
      {...props}
      className="font-medium text-link underline decoration-link/40 underline-offset-4 [overflow-wrap:anywhere] hover:decoration-link"
    >
      {children}
    </a>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="border-l-4 border-primary pl-4 italic text-muted-foreground"
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto">
      <table {...props} className="w-full text-left text-base">
        {children}
      </table>
    </div>
  ),
};

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="space-y-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
