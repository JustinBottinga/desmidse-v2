import siteJson from "@/content/site.json";

export type NavItem = {
  label: string;
  link: string;
  /** Toont de diensten als uitklapmenu onder dit item. */
  dropdown?: boolean;
};

export type SiteSettings = {
  metadata: {
    siteUrl: string;
    siteNaam: string;
    standaardBeschrijving: string;
    standaardAfbeelding?: string;
  };
  navigatie: {
    /** klein-tekst: klein logo + sitenaam als tekst; klein: alleen klein logo; groot: groot logo (met tekst in de afbeelding). */
    logoStijl?: "klein-tekst" | "klein" | "groot";
    logoKlein?: string;
    logoGroot?: string;
    logoTekst?: string;
    items: NavItem[];
    belKnopTonen?: boolean;
  };
  footer: {
    toonDiensten?: boolean;
    dienstenKop: string;
    paginaKop: string;
    paginaLinks: { label: string; link: string }[];
    onderregel?: string;
  };
};

const base = siteJson as SiteSettings;

// Op Netlify previews en branch deploys wijzen canonical/og:url naar die
// deploy zelf in plaats van naar de live site (zie vite.config.ts).
export const site: SiteSettings = {
  ...base,
  metadata: {
    ...base.metadata,
    siteUrl: import.meta.env.VITE_SITE_URL_OVERRIDE || base.metadata.siteUrl,
  },
};

export function isExternalLink(link: string) {
  return /^(https?:|mailto:|tel:)/i.test(link);
}
