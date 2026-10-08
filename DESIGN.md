# DESIGN.md: De Smidse BTA

Visuele stijlgids voor de bestaande site (React + Tailwind v4 + shadcn-tokens).
Dit is **geen nieuwe layout**. De pagina-indeling, routes, componenten en content blijven zoals ze zijn.
Alleen kleur, lettertype, vorm en toon veranderen, grotendeels via de tokens in `src/index.css`.

Het canvas met de uitgewerkte voorbeelden staat hier: https://claude.ai/artifact/8v4aRfXvqrVbTgAnzzQZ3d

## 1. Uitgangspunt

De site helpt iemand die een woning koopt, verkoopt, laat bouwen of een bouwprobleem heeft om snel te weten **welke keuring past, wat die kost en hoe hij of zij Jeroen bereikt**. Het ontwerp is daarom rustig, technisch en betrouwbaar, met één duidelijke actie: **bellen**.

Drie kernwoorden: **staal** (donker, solide), **krijt** (warm lichtgrijs, geen wit-blauw), **vonk** (één oranje accent, alleen voor de actie).

## 2. Kleur

Eén accent. Oranje is voor knoppen, kleine markeringen en actieve states, niet voor vlakken met veel tekst.

| Token (rol)            | Hex       | Gebruik                                              |
| ---------------------- | --------- | ---------------------------------------------------- |
| `background` (krijt)   | `#F2F1EC` | Pagina-achtergrond                                   |
| `card` (papier)        | `#FFFFFF` | Kaarten, tabelrijen, afwisselende secties            |
| `foreground` (staal)   | `#14202B` | Tekst, donkere secties (footer, "Over mij"), outline |
| `muted-foreground`     | `#3B4856` | Lopende tekst op krijt/papier, ondertitels           |
| `border`               | `#D9D7CE` | Lijnen, kaartranden                                  |
| `primary` (vonk)       | `#F27A45` | Primaire knop, bel-balk. Tekst erop is altijd staal |
| `link` (vonk, donker)  | `#B8400F` | Oranje **tekst** op licht (labels, links, nummers)   |
| `vonk-op-donker`       | `#FF9A6B` | Oranje tekst/iconen op staal                         |
| `muted` / `accent`     | `#E9E7DF` | Hover-vlakken, dropdown-hover                        |
| `staal-lijn`           | `#34495C` | Lijnen op donkere secties                            |
| `staal-tekst`          | `#D5DCE3` | Lopende tekst op staal                               |

Contrast (gemeten): staal op vonk 6,0:1, `link` op krijt 5,0:1, staal op krijt 14:1. **Witte tekst op vonk niet gebruiken** (3,9:1, te laag).

Statuskleuren (alleen voor rapport-/statuslabels): in orde `#DDEFE3` / `#14532D`, let op `#FCE9C4` / `#6B3F00`, aandacht `#FBD9CC` / `#7A2308`.

Verboden: blauw (`bg-blue-*`, `text-blue-*`), `bg-gray-900`, `bg-slate-*`, gradients, schaduwen met kleur, `bg-black/50` overlays zonder reden.

### Tokens voor `src/index.css`

Vervang het `:root`-blok. Het `.dark`-blok wordt nergens gebruikt en mag blijven staan of weg.

```css
:root {
  --background: #f2f1ec;
  --foreground: #14202b;

  --card: #ffffff;
  --card-foreground: #14202b;
  --popover: #ffffff;
  --popover-foreground: #14202b;

  --primary: #f27a45;
  --primary-foreground: #14202b;

  --secondary: #14202b;
  --secondary-foreground: #f2f1ec;

  --muted: #e9e7df;
  --muted-foreground: #3b4856;
  --accent: #e9e7df;
  --accent-foreground: #14202b;

  --destructive: #b42318;
  --destructive-foreground: #ffffff;

  --border: #d9d7ce;
  --input: #d9d7ce;
  --ring: #14202b;

  --link: #b8400f;
  --ink-line: #34495c;
  --ink-text: #d5dce3;

  --radius: 0.5rem;
}
```

Voeg in het `@theme inline`-blok toe:

```css
  --color-link: var(--link);
  --color-ink-line: var(--ink-line);
  --color-ink-text: var(--ink-text);

  --font-sans: "Hanken Grotesk", system-ui, sans-serif;
  --font-display: "Bricolage Grotesque", "Hanken Grotesk", system-ui, sans-serif;
  --font-mono: "IBM Plex Mono", ui-monospace, monospace;
```

Voeg onderaan toe:

```css
h1, h2, h3 {
  font-family: var(--font-display);
  letter-spacing: -0.02em;
}
a:focus-visible, button:focus-visible {
  outline: 3px solid var(--ring);
  outline-offset: 3px;
}
```

## 3. Lettertypen

| Rol                    | Font                              | Gewicht  | Tailwind                      |
| ---------------------- | --------------------------------- | -------- | ----------------------------- |
| Koppen (h1 t/m h3)     | Bricolage Grotesque               | 700      | `font-display font-bold`      |
| Lopende tekst, UI      | Hanken Grotesk                    | 400 / 600 / 700 | `font-sans`            |
| Labels, nummers, m³    | IBM Plex Mono                     | 400 / 500 | `font-mono`                  |

Laden in `index.html` (in `<head>`, vóór het script):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@600;700&family=Hanken+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
  rel="stylesheet"
/>
```

### Schaal

| Element              | Mobiel → desktop                         | Opmerking                              |
| -------------------- | ---------------------------------------- | -------------------------------------- |
| Pagina-h1 (`Hero`)   | `text-4xl md:text-5xl lg:text-6xl`       | `leading-[1.02] tracking-tight`        |
| Sectie-h2            | `text-3xl md:text-4xl`                   | `leading-tight`                        |
| h3 in tekst          | `text-xl md:text-2xl`                    |                                        |
| Lopende tekst        | `text-base leading-7` (17 px waar het kan) | Niet meer `text-sm` voor hoofdtekst  |
| Intro / lead         | `text-lg md:text-xl text-muted-foreground` |                                      |
| Kleine label         | `font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground` | Vervangt de grijze `tracking-widest`-labels |
| Prijs                | `font-display font-bold text-2xl`+        | Eenheid ernaast in `font-mono text-xs`  |

Lopende tekst niet kleiner dan 16 px. Dat geldt ook voor de `Markdown`-component (nu `text-sm`).

## 4. Vorm en ruimte

- **Containers:** blijf `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` gebruiken. Niet aanpassen.
- **Secties:** verticale ruimte `py-16 md:py-24` tussen grote blokken.
- **Radius:** knoppen en inputs `rounded-lg` (8 px). Kaarten en afbeeldingen `rounded-xl` (12 px). Geen `rounded-full` behalve statuslabels.
- **Lijnen boven schaduw:** kaarten krijgen `border border-border bg-card`. Schaduw alleen `shadow-sm`, nooit op knoppen.
- **Scheiding:** secties wisselen tussen `bg-background` (krijt), `bg-card` (papier) en `bg-foreground` (staal). Gebruik niet meer dan één staal-sectie tussen header en footer.
- **Aanraakdoelen:** minimaal 44 × 44 px voor alles wat klikbaar is op mobiel.

## 5. Componenten: wat verandert er

Alleen klassen en tokens, geen structuur.

### `ui/button.tsx`
- Basis: `rounded-md` → `rounded-lg`, `font-medium` → `font-bold`, `text-sm` → `text-base`.
- `default`: `bg-primary text-primary-foreground hover:brightness-95`, geen `shadow`.
- `secondary`: `bg-secondary text-secondary-foreground hover:bg-secondary/90`. Dit is de donkere knop, bijvoorbeeld op een oranje vlak.
- `outline`: `border-2 border-foreground bg-transparent hover:bg-foreground hover:text-background`.
- Maten: `default: h-11 px-5`, `lg: h-12 px-7 text-lg`. Verwijder `h-9`.
- Focus: `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2` blijft.

### `Header.tsx`
- Achtergrond `bg-background`, onderrand `border-b border-border`.
- Links: `text-base font-semibold`. Inactief `text-muted-foreground`, actief `text-foreground` met `underline decoration-primary decoration-[3px] underline-offset-8`.
- Voeg rechts naast "Contact" een `Button` toe met het telefoonnummer (`tel:`-link, `bg-primary`). Op mobiel alleen het telefoon-icoon, naast het menu-icoon. Dit is de enige nieuwe UI.
- Dropdown: `rounded-xl border bg-popover shadow-sm`, items `hover:bg-accent`.

### `Hero.tsx`
- Behoud de foto en de overlay, maar maak de overlay `bg-foreground/60` in plaats van `bg-black/50`.
- Subtitel: `font-mono text-xs uppercase tracking-[0.14em] text-white/80`.
- Titel: `font-display font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight`.
- Bij de placeholder-afbeelding (`hero-placeholder.svg`): gebruik `bg-foreground` zonder foto.

### `Sections.tsx`
- Sectiekop (`h2`): `text-3xl md:text-4xl font-bold` en links uitgelijnd waar de tekst links staat. Gecentreerd mag alleen bij korte koppen.
- Kolomlabel (`h3`): `font-mono text-xs font-medium uppercase tracking-[0.14em] text-link mb-3`.
- Scheidingslijn `<hr>`: `border-border`.
- Vul kolommen niet op met kaarten. De tekstkolommen blijven open op de achtergrond.

### `Markdown.tsx`
- `p`, `ul`, `ol`: `text-sm` → `text-base`, kleur `text-foreground/90` → `text-muted-foreground`. Lijsten: `marker:text-link`.
- `h2`/`h3`: `font-display`.
- Link: `text-link underline decoration-link/40 underline-offset-4 hover:decoration-link` (vervangt `text-blue-700`).
- Blockquote: `border-l-4 border-primary`.
- Vet (`strong`) in prijzen blijft `font-bold text-foreground`.

### `pages/Home.tsx`
- Wrapper `bg-white` → `bg-background`.
- Icoonvakjes: `bg-blue-500 text-white` → `bg-foreground text-primary`.
- Tekstkleuren `text-slate-800` → `text-foreground`, `text-slate-500` → `text-muted-foreground`.
- Belkaart: `bg-blue-600 text-white` → `bg-primary text-primary-foreground rounded-xl`. Telefoonnummer `font-display text-3xl`, tekst `text-primary-foreground`, knop `variant="secondary"` (donker).
- Dienstenlijst: `text-sm` → `text-base`; bullet `•` mag blijven of wordt een `Check`-icoon (`lucide-react`) in `text-link`.
- Keurmerken-blok: titel links of gecentreerd zoals nu, `h3` als mono-label (zie `Sections`).

### `Footer.tsx`
- `bg-gray-900 text-white` → `bg-foreground text-ink-text`.
- Koppen: `font-mono text-xs uppercase tracking-[0.14em] text-[#FF9A6B]` in plaats van `text-lg font-semibold`.
- Hover: `hover:text-blue-400` → `hover:text-white hover:underline`.
- Labels als `text-gray-400` → `text-ink-text/70`.

### Dienstpagina's (`Diensten.tsx`, `pages/…`)
- Prijsblokken (`**€ 345,-**` in Markdown) blijven vet. Optioneel kan één prijsregel per pagina in een `bg-foreground text-background rounded-xl p-6` kaart, met `font-display text-4xl` voor het bedrag.
- Kruimelpad (`Breadcrumbs.tsx`): `text-sm text-muted-foreground`, actieve pagina `font-semibold text-foreground`.

## 6. Toon van de tekst

- Spreek de bezoeker aan met "u" (zoals de site nu doet) of "je" (blog). Kies per pagina één, niet door elkaar.
- Begin met wat het oplevert voor de bezoeker ("Weet wat u koopt, voordat u tekent"), niet met wie het bedrijf is.
- Korte zinnen. Geen vakjargon zonder uitleg ("IWI", "NTA 8060" altijd met een halve zin uitleg).
- Prijzen altijd met "incl. btw" en de grens (m³).
- Eén actie per scherm: bellen. E-mail is secundair.

## 7. Toegankelijkheid

- Tekstcontrast minimaal 4,5:1. Gebruik voor oranje tekst op licht altijd `text-link`, nooit `text-primary`.
- Elk klikbaar element heeft een zichtbare focus (3 px `ring`-kleur, zie §2).
- Iconen die alleen een functie hebben krijgen `aria-label`. Decoratieve iconen `aria-hidden`.
- Kleur is nooit de enige drager: statuslabels hebben altijd tekst.
- `lang="nl"` blijft op `<html>`.

## 8. Wat niet te doen

- Geen nieuwe pagina-indelingen of extra secties, behalve de belknop in de header.
- Geen emoji, geen stockfoto-collages, geen gradients, geen blauw.
- Geen tweede accentkleur naast vonk.
- Niet mixen van `slate-`, `gray-` en `zinc-` utility-klassen: gebruik alleen de tokens uit §2.
- Geen lettergroottes onder 14 px behalve mono-labels (12 px).

## 9. Volgorde van toepassen

1. `index.html`: fonts laden (§3).
2. `src/index.css`: tokens, `@theme` en base-regels (§2).
3. `ui/button.tsx`, `Markdown.tsx` (grootste effect, één plek).
4. `Header.tsx`, `Footer.tsx`.
5. `Hero.tsx`, `Sections.tsx`.
6. `pages/Home.tsx` en de overige pagina's: zoek op `blue-`, `slate-`, `gray-`, `bg-white`, `text-sm` en vervang volgens §5.
7. Controleer elke pagina op mobiel (390 px) en desktop (1280 px).

Zoekcommando voor resterende afwijkingen:

```bash
grep -rnE "(bg|text|border)-(blue|slate|gray|zinc)-" src
```
