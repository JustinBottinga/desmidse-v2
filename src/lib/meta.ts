// Pure helpers (geen DOM, geen alias-imports) zodat ze ook door de
// prerender-plugin in vite.config.ts gebruikt kunnen worden.

export type SiteMeta = {
  siteUrl: string;
  siteNaam: string;
  standaardBeschrijving: string;
  standaardAfbeelding?: string;
};

export type PageMetaSource = {
  titel?: string;
  intro?: string;
  afbeelding?: string;
  /** Groep "Metadata" uit het CMS. */
  metadata?: {
    titel?: string;
    beschrijving?: string;
    afbeelding?: string;
  };
};

export type PageMeta = {
  title: string;
  description: string;
  image?: string;
  url: string;
};

export type MetaTag =
  | { tag: "meta"; attr: "name" | "property"; key: string; value: string }
  | { tag: "link"; attr: "rel"; key: string; value: string };

const PLACEHOLDER = "hero-placeholder.svg";

export function absoluteUrl(site: SiteMeta, path: string) {
  if (/^https?:\/\//i.test(path)) return path;
  const base = site.siteUrl.replace(/\/+$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function truncate(text: string, max = 160) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 80 ? cut.lastIndexOf(" ") : cut.length)}…`;
}

export function buildMeta(
  site: SiteMeta,
  page: PageMetaSource,
  path: string,
): PageMeta {
  const photo =
    page.afbeelding && !page.afbeelding.endsWith(PLACEHOLDER)
      ? page.afbeelding
      : undefined;
  const image = page.metadata?.afbeelding || photo || site.standaardAfbeelding;
  const normalizedPath = path.length > 1 ? path.replace(/\/+$/, "") : path;

  return {
    title:
      page.metadata?.titel?.trim() ||
      (page.titel ? `${page.titel} | ${site.siteNaam}` : site.siteNaam),
    description:
      page.metadata?.beschrijving?.trim() ||
      (page.intro ? truncate(page.intro) : site.standaardBeschrijving),
    image: image ? absoluteUrl(site, image) : undefined,
    url: absoluteUrl(site, normalizedPath),
  };
}

export function metaTags(meta: PageMeta, siteNaam: string): MetaTag[] {
  const tags: MetaTag[] = [
    { tag: "meta", attr: "name", key: "description", value: meta.description },
    { tag: "link", attr: "rel", key: "canonical", value: meta.url },
    { tag: "meta", attr: "property", key: "og:type", value: "website" },
    { tag: "meta", attr: "property", key: "og:locale", value: "nl_NL" },
    { tag: "meta", attr: "property", key: "og:site_name", value: siteNaam },
    { tag: "meta", attr: "property", key: "og:title", value: meta.title },
    {
      tag: "meta",
      attr: "property",
      key: "og:description",
      value: meta.description,
    },
    { tag: "meta", attr: "property", key: "og:url", value: meta.url },
    {
      tag: "meta",
      attr: "name",
      key: "twitter:card",
      value: meta.image ? "summary_large_image" : "summary",
    },
    { tag: "meta", attr: "name", key: "twitter:title", value: meta.title },
    {
      tag: "meta",
      attr: "name",
      key: "twitter:description",
      value: meta.description,
    },
  ];
  if (meta.image) {
    tags.push(
      { tag: "meta", attr: "property", key: "og:image", value: meta.image },
      { tag: "meta", attr: "name", key: "twitter:image", value: meta.image },
    );
  }
  return tags;
}

function escapeAttr(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** Zet de metadata in een bestaande index.html (voor prerender bij de build). */
export function injectMeta(html: string, meta: PageMeta, siteNaam: string) {
  const tags = metaTags(meta, siteNaam);
  const keys = tags.map((t) => t.key);

  // Haal bestaande tags weg die we gaan vervangen.
  let out = html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
    .replace(
      /<(meta|link)\b[^>]*?(?:name|property|rel)=["']([^"']+)["'][^>]*>\s*/gi,
      (match, _tag, key) => (keys.includes(key) ? "" : match),
    );

  const block = [
    `<title>${escapeAttr(meta.title)}</title>`,
    ...tags.map((t) =>
      t.tag === "link"
        ? `<link rel="${t.key}" href="${escapeAttr(t.value)}" />`
        : `<meta ${t.attr}="${t.key}" content="${escapeAttr(t.value)}" />`,
    ),
  ]
    .map((line) => `    ${line}`)
    .join("\n");

  out = out.replace(/<\/head>/i, `${block}\n  </head>`);
  return out;
}
