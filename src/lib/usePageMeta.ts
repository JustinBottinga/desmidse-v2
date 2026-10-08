import { useEffect } from "react";
import { site } from "@/lib/site";
import {
  buildMeta,
  metaTags,
  type PageMetaSource,
} from "@/lib/meta";

function upsert(
  tag: "meta" | "link",
  attr: string,
  key: string,
  value: string,
) {
  let el = document.head.querySelector(`${tag}[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute(tag === "link" ? "href" : "content", value);
}

function remove(attr: string, key: string) {
  document.head.querySelector(`[${attr}="${key}"]`)?.remove();
}

/** Zet title, description, canonical en Open Graph-tags voor de huidige pagina. */
export function usePageMeta(page: PageMetaSource, path: string) {
  const { titel, intro, afbeelding, metaTitel, metaBeschrijving, metaAfbeelding } =
    page;

  useEffect(() => {
    const meta = buildMeta(
      site.metadata,
      { titel, intro, afbeelding, metaTitel, metaBeschrijving, metaAfbeelding },
      path,
    );
    document.title = meta.title;
    metaTags(meta, site.metadata.siteNaam).forEach((t) =>
      upsert(t.tag, t.attr, t.key, t.value),
    );
    if (!meta.image) {
      remove("property", "og:image");
      remove("name", "twitter:image");
    }
  }, [titel, intro, afbeelding, metaTitel, metaBeschrijving, metaAfbeelding, path]);
}
