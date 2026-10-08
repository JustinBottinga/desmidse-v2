import { Children, type CSSProperties, type ReactNode } from "react";

/**
 * Kolommen naast elkaar, ongeacht hoeveel het er zijn (CMS-content).
 * Flex-wrap: elke kolom is minimaal 16rem breed en wrapt daarna naar de
 * volgende regel. Vanaf `sm` (max 2) en `lg` (max 4) krijgen alle kolommen
 * dezelfde breedte, ook de laatste op een onvolledige regel, zodat het bij
 * 3, 5 of 7 kolommen niet scheef of uitgerekt staat.
 */
export default function ColumnGrid({ children }: { children: ReactNode }) {
  const count = Children.toArray(children).length;
  const style = {
    "--m": Math.min(count, 2),
    "--n": Math.min(count, 4),
  } as CSSProperties;

  return (
    <div
      style={style}
      className="flex flex-wrap gap-8 [&>*]:min-w-0 [&>*]:grow [&>*]:basis-64 sm:[&>*]:max-w-[calc((100%-(var(--m)-1)*2rem)/var(--m))] lg:[&>*]:max-w-[calc((100%-(var(--n)-1)*2rem)/var(--n))]"
    >
      {children}
    </div>
  );
}
