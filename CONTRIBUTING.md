# Contributing

Thanks for helping improve this list! This guide explains how to add or refine entries, run checks locally with Bun, and submit a great pull request.

## Prerequisites
- Bun installed (see `package.json` → `packageManager` or visit bun.sh)
- Git configured

After cloning:
```bash
bun install
```

Git hooks are managed by Lefthook and are installed on `bun install`. The pre-commit hook runs `bun run build` to keep `README.md` in sync.

## What belongs here
We curate a high‑signal, verifiable catalog of recognized websites and apps using Svelte or SvelteKit.
- Prefer brands, institutions, or notable products.
- Every entry needs strong, public evidence (see Evidence guidelines).

## Workflow overview
1) Add or edit a site in `scripts/data/sites.ts`.
2) Validate and type‑check your changes.
3) Regenerate the `README.md` stats and table.
4) Commit both the data change and the regenerated `README.md`.

### Commands
```bash
# Generate README stats and sites table on any change
bun run dev

# Generate README stats and sites table
bun run build
```

## Adding a site
Open `scripts/data/sites.ts` and add a new object to the `sites` array.

## Evidence guidelines
- Prefer first‑party sources: official blog, docs, engineering posts.
- For detectors, link a stable, public page (or an archived snapshot).
- If Svelte is used only for a section (e.g., a dashboard), clarify in `notes` and consider setting a status note.

## Common tasks
- Rebuild README: `bun run build`
- Update deps within ranges: `bun update`

## Troubleshooting
- Hooks didn’t run: ensure `bunx lefthook install` and that `.git/hooks` exists; re-run `bun install`.
- README didn’t change: make sure you ran `bun run build` and that your entry isn’t marked `hidden: true`.
- Type errors: check your object matches the schema and field spellings; run `bunx tsc --noEmit`.
- Network errors on build: the build only rewrites local files; no network is required. Verify file write permissions.

## License
MIT — data contributions are under CC0 unless otherwise stated.
