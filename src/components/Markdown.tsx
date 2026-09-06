import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const components: Components = {
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
  h4: ({ children, ...props }) => (
    <h4 {...props} className="mt-6 font-semibold text-foreground">
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="text-sm leading-7 text-foreground/90">
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul
      {...props}
      className="list-disc space-y-2 pl-5 text-sm leading-7 text-foreground/90"
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol
      {...props}
      className="list-decimal space-y-2 pl-5 text-sm leading-7 text-foreground/90"
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

export default function Markdown({ children }: { children: string }) {
  return (
    <div className="space-y-4">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
