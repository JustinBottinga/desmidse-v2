import { Link } from "react-router-dom";
import { usePageMeta } from "@/lib/usePageMeta";

export default function NotFound() {
  usePageMeta({ metadata: { titel: "Pagina niet gevonden | De Smidse BTA" } }, "/");
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="w-full max-w-xl text-center">
        <div className="mb-6 flex items-center justify-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          <span className="h-px w-10 bg-border" />
          <span>De Smidse BTA</span>
          <span className="h-px w-10 bg-border" />
        </div>

        <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          404
        </p>

        <h1 className="mt-6 font-display text-4xl font-bold text-foreground sm:text-5xl">
          Pagina niet gevonden
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-muted-foreground">
          De pagina die je zoekt bestaat niet of is verplaatst. Wij helpen je
          graag terug naar een relevante pagina.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-foreground px-5 text-base font-bold text-background transition hover:opacity-90 h-11"
          >
            Terug naar home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg border-2 border-foreground px-5 text-base font-bold text-foreground transition hover:bg-foreground hover:text-background h-11"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
