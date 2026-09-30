import { defineConfig } from 'astro/config';
import { readFileSync, existsSync } from 'fs';
import { resolve } from 'path';

// Load .env into process.env so page frontmatter can read PUBLIC_* vars
// without Astro/Vite's import.meta.env masking behavior.
const envPath = resolve(process.cwd(), '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split(/\r?\n/)) {
    const m = line.match(/^\s*([^#=][^=]*)\s*=\s*(.*?)\s*$/);
    if (m) process.env[m[1].trim()] = m[2].replace(/^["']|["']$/g, '');
  }
}

export default defineConfig({
  site: 'https://panhandleheadlights.com',
  build: {
    format: 'directory',
  },
  compressHTML: false,
});
