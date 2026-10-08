import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

export default function NotFound() {
  usePageMeta({ metadata: { titel: "Pagina niet gevonden | De Smidse BTA" } }, "/");

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          <span>De Smidse BTA</span>
          <span className="h-px w-10 bg-border" />
        </div>

        <p className="text-[11px] font-medium uppercase tracking-[0.38em] text-muted-foreground">
          404
        </p>

        <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
          Pagina niet gevonden
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground">
          De pagina die je zoekt bestaat niet of is verplaatst. Wij helpen je
          graag terug naar een relevante pagina.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:opacity-90"
          >
            Terug naar home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition hover:border-foreground/40"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
