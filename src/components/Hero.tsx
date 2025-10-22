type HeroProps = {
  image: string;
  title: string;
  subtitle?: string;
  paragraph?: string;
  heightClassName?: string; // allow override e.g., h-80 lg:h-96
};

export function Hero({
  image,
  title,
  subtitle,
  paragraph,
  heightClassName,
}: HeroProps) {
  const h = heightClassName ?? "h-64 md:h-80 lg:h-96";
  return (
    <section className="relative w-full">
      <div className={`relative ${h}`}>
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-8">
          <div className="space-y-2 text-white">
            {subtitle ? (
              <div className="text-sm/6 tracking-wide uppercase text-white/80">
                {subtitle}
              </div>
            ) : null}
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {title}
            </h1>
            {paragraph ? (
              <p className="max-w-2xl text-white/90">{paragraph}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
