# De Smidse BTA

React + Vite site met Decap CMS. Alle paginateksten staan als content-bestanden in `src/content/` en zijn te bewerken via `/admin`.

## Lokaal draaien

```bash
npm install
npm run dev
```

De CMS lokaal bewerken (schrijft direct naar je bestanden, zonder inloggen):

```bash
npx decap-server
```

Draai dat naast `npm run dev` en open http://localhost:5173/admin/.

## Content

| Wat                                  | Waar                                           |
| ------------------------------------ | ---------------------------------------------- |
| Home                                 | `src/content/pages/home.json`                  |
| Over mij                             | `src/content/pages/about.json`                 |
| Contact                              | `src/content/pages/contact.json`               |
| Diensten-overzicht en blog-overzicht | `src/content/pages/diensten.json`, `blog.json` |
| Diensten (1 bestand per dienst)      | `src/content/diensten/*.json`                  |
| Blogberichten                        | `src/content/blog/*.md`                        |
| Geüploade afbeeldingen               | `public/media/uploads/`                        |

Het menu en de footer halen de diensten uit `src/content/diensten/`; het veld `volgorde` bepaalt de volgorde.

## Inloggen op het CMS (Netlify)

De CMS gebruikt Netlify Identity + Git Gateway, dus redacteuren loggen in met e-mail en wachtwoord
in plaats van met een GitHub-account. Eenmalig instellen in de Netlify-site:

1. **Integrations / Identity** → Identity inschakelen.
2. **Identity → Registration** op _Invite only_ zetten.
3. **Identity → Services → Git Gateway** inschakelen.
4. **Identity → Invite users** en het e-mailadres van de redacteur uitnodigen.

De uitnodigingsmail linkt naar de site; na het instellen van een wachtwoord stuurt de site
automatisch door naar `/admin/`.

## Publiceren

Het CMS staat in _editorial workflow_: opslaan zet een wijziging als concept op een aparte
branch, er gebeurt dan nog niets op de live site. Onder de tab **Workflow** sleep je een
wijziging naar _Klaar_ en klik je op **Publiceren**; pas dan wordt het naar `main` gemerged
en bouwt Netlify de site opnieuw.

Zet in Netlify onder _Build & deploy → Continuous deployment_ de **deploy previews uit**
en **branch deploys op "None"**. Anders bouwt Netlify ook elk concept, en levert het
uitstellen van publiceren geen deploys op.
