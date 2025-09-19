#!/usr/bin/env bun
/// <reference types="bun-types" />
import { sites } from './data/sites.ts';

console.log(`📊 Found ${sites.length} site(s) in the catalog.`);

// Simple stats
const counts = {
  svelte: sites.filter(s => s.implementation === 'Svelte').length,
  sveltekit: sites.filter(s => s.implementation === 'Svelte Kit').length,
};

function badge(label: string, value: string) {
  return `![${label}](https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(value)}-brightgreen)`;
}

// Generate stats
const stats = `${badge('entries', String(sites.length))} ${badge('svelte', String(counts.svelte))} ${badge('sveltekit', String(counts.sveltekit))}`;

// Generate sites table
const sitesTable = sites
  .sort((a, b) => a.name.localeCompare(b.name))
  .map(site => {
    const domains = site.domains.map(d => `[${d}](${d.startsWith('http') ? d : `https://${d}`})`).join('<br/>');
    const label = site.brand && site.brand !== site.name ? `${site.name} — ${site.brand}` : site.name;
    const evidence = site.evidence.map(e => `[${e.type}](${e.url})`).join(', ');
    return `| ${label} | ${site.implementation} | ${domains} | ${evidence} | ${site.sector || ''} |`;
  })
  .join('\n');

const table = `## 📇 Sites

| Site | Implementation | Domains | Evidence | Sector |
|------|----------------|---------|----------|--------|
${sitesTable}`;

// Update README using Bun's built-in file APIs
const readmeContent = await Bun.file('README.md').text();
const updated = readmeContent
  .replace(/<!-- STATS -->[\s\S]*?<!-- END_STATS -->/, `<!-- STATS -->\n${stats}\n<!-- END_STATS -->`)
  .replace(/<!-- SITES_TABLE -->[\s\S]*?<!-- END_SITES_TABLE -->/, `<!-- SITES_TABLE -->\n${table}\n<!-- END_SITES_TABLE -->`);

await Bun.write('README.md', updated);
console.log('✅ README.md updated');