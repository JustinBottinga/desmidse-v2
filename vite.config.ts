import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { buildMeta, injectMeta, type PageMetaSource, type SiteMeta } from './src/lib/meta'

// Netlify zet CONTEXT (production | deploy-preview | branch-deploy | dev) en
// DEPLOY_PRIME_URL (het adres van de deploy). Alles behalve production is een
// preview: die wijst naar zichzelf en wordt niet geïndexeerd.
const previewUrl =
  process.env.CONTEXT && process.env.CONTEXT !== 'production'
    ? process.env.DEPLOY_PRIME_URL
    : undefined

const readJson = <T>(path: string) =>
  JSON.parse(readFileSync(path, 'utf8')) as T

// De site is een SPA: zonder JavaScript (zoekmachines, link-previews in
// WhatsApp/LinkedIn) is index.html overal hetzelfde. Deze plugin schrijft bij
// de build per dienstpagina een eigen index.html met de metadata uit de CMS-
// velden. Netlify serveert die bestanden vóór de SPA-redirect.
function prerenderDienstenMeta(): Plugin {
  let outDir = 'dist'
  let root = process.cwd()
  return {
    name: 'prerender-diensten-meta',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
      root = config.root
    },
    closeBundle() {
      const indexPath = join(outDir, 'index.html')
      const template = readFileSync(indexPath, 'utf8')
      const site = readJson<{ metadata: SiteMeta }>(
        join(root, 'src/content/site.json'),
      ).metadata
      if (previewUrl) site.siteUrl = previewUrl

      const pages: Array<{ path: string; source: PageMetaSource }> = [
        {
          path: '/diensten',
          source: readJson<PageMetaSource>(
            join(root, 'src/content/pages/diensten.json'),
          ),
        },
      ]
      const dienstDir = join(root, 'src/content/diensten')
      for (const file of readdirSync(dienstDir).filter((f) => f.endsWith('.json'))) {
        pages.push({
          path: `/diensten/${file.replace(/\.json$/, '')}`,
          source: readJson<PageMetaSource>(join(dienstDir, file)),
        })
      }

      for (const { path, source } of pages) {
        const html = injectMeta(template, buildMeta(site, source, path), site.siteNaam)
        const target = join(outDir, path, 'index.html')
        mkdirSync(dirname(target), { recursive: true })
        writeFileSync(target, html)
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
    prerenderDienstenMeta(),
    {
      name: 'noindex-previews',
      apply: 'build',
      transformIndexHtml: () =>
        previewUrl
          ? [
              {
                tag: 'meta',
                attrs: { name: 'robots', content: 'noindex' },
                injectTo: 'head',
              },
            ]
          : [],
    },
  ],
  define: {
    'import.meta.env.VITE_SITE_URL_OVERRIDE': JSON.stringify(previewUrl ?? ''),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
