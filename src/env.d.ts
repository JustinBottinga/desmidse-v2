/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Alleen gezet bij Netlify previews/branch deploys: het adres van die deploy. */
  readonly VITE_SITE_URL_OVERRIDE?: string;
}
