import type { CSSProperties } from "react";

export type Logo = { afbeelding: string; alt: string };

/**
 * Logo's in vierkante vlakken zonder tussenruimte, met een lichte rand.
 * Het aantal komt uit het CMS: de strook past zich aan. Mobiel max 2 per rij,
 * vanaf `sm` max 4. Vlakken zijn maximaal 14rem; bij minder logo's wordt de
 * strook smaller en blijft gecentreerd, zodat er geen lege plekken ontstaan.
 * De randen overlappen met -1px, zodat buurvlakken één lijn delen.
 */
export default function LogoStrip({ logos }: { logos?: Logo[] }) {
  if (!logos?.length) return null;

  const style = {
    "--m": Math.min(logos.length, 2),
    "--n": Math.min(logos.length, 4),
  } as CSSProperties;

  return (
    <ul
      style={style}
      className="mx-auto mt-12 flex max-w-[min(100%,calc(var(--m)*14rem))] flex-wrap pl-px pt-px sm:max-w-[min(100%,calc(var(--n)*14rem))]"
    >
      {logos.map((logo, index) => (
        <li
          key={`${logo.afbeelding}-${index}`}
          className="-ml-px -mt-px aspect-square basis-[calc(100%/var(--m))] sm:basis-[calc(100%/var(--n))]"
        >
          <div className="flex h-full w-full items-center justify-center border border-border bg-card p-[12%]">
            <img
              src={logo.afbeelding}
              alt={logo.alt}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
