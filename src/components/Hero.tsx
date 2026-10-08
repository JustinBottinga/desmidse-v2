type HeroProps = {
  image: string;
  title: string;
  subtitle?: string;
  paragraph?: string;
  heightClassName?: string; // allow override e.g., min-h-80 lg:min-h-96
};

const PLACEHOLDER = "hero-placeholder.svg";

export function Hero({
  image,
  title,
  subtitle,
  paragraph,
  heightClassName,
}: HeroProps) {
  // min-h in plaats van een vaste hoogte: lange introteksten lopen op mobiel
  // anders over de rand van de header heen.
  const h = heightClassName ?? "min-h-64 md:min-h-80 lg:min-h-96";
  const hasPhoto = !image.endsWith(PLACEHOLDER);
  return (
    <section className="relative w-full bg-foreground">
      <div className={`relative flex ${h}`}>
        {hasPhoto ? (
          <>
            <img
              src={image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/60" />
          </>
        ) : null}
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end px-4 pb-8 pt-12 sm:px-6 lg:px-8">
          <div className="space-y-3 text-white">
            {subtitle ? (
              <div className="font-mono text-xs uppercase tracking-[0.14em] text-white/80">
                {subtitle}
              </div>
            ) : null}
            <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight [overflow-wrap:anywhere] md:text-5xl lg:text-6xl">
              {title}
            </h1>
            {paragraph ? (
              <p className="max-w-2xl text-base leading-7 text-white/90 md:text-lg">
                {paragraph}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
