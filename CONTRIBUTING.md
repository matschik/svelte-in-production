# Contributing

Thanks for helping improve this list!

## Add a site
1. Ensure it meets at least one Inclusion Criterion in the README.
2. Append an object to `data/sites.json` (keep the array sorted by `name`).
3. Provide an **evidence URL** (blog post, press, detector report, or repo) in `evidence.url`.
4. Run locally:
   - `pnpm install`
   - `node scripts/validate.ts`
   - `node scripts/build-readme.ts`
5. Commit both `data/sites.json` **and** the regenerated `README.md`.

### Evidence tips
- Prefer **first‑party evidence** (official blog/docs).
- Detector links should be stable (public report or archive).
- If Svelte is used only in a section (e.g., dashboard), set `status: partial` and clarify in `notes`.

### Labels
- `framework: svelte` vs `framework: sveltekit`.
- `status: legacy` if the site migrated away (keep record with last known date).

### Quality bar
- No affiliate links. No SEO spam. Keep descriptions neutral and concise.