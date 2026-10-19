# Claude Code Configuration

See [AGENTS.md](./AGENTS.md) for all project documentation and AI agent instructions.

## OceanObs'29 project

@docs/PROJECT_BRIEF.md

## About the organization (overrides the brief where they differ)

<!-- Filled in during kickoff. Keep it short and exact. -->

- **Name:** TODO (exact wording; how it must and must not be written)
- **Host / parent / status:** TODO (the exact status sentence lives in `src/config/org.ts` → `ORG.status`)
- **Logo:** TODO (own logo? partner logos allowed only in the footer strip?)
- **Photos:** follow `docs/IMAGERY_PLAN.md`. Every photo is registered in `src/config/images.ts` with credit and license.
- **Social accounts:** TODO
- **Site sections:** TODO. Languages: TODO.
- **Single source of truth:** names, host, status and contacts live in `src/config/org.ts`; homepage copy in `src/config/home.ts`. Never hard-code them in pages.

## Design rules

<!-- Filled in during the design phase from the reference screenshots. -->

**Tone:** TODO. References: TODO (in `../reference/`).

**Typography** (Fonts API in `astro.config.ts`)

- Headings: **TODO** (`--font-display`), weight 700–800, tight tracking.
- Body, labels, metadata: **Inter**.
- Eyebrow labels: `eyebrow` / `eyebrow-bar` utilities (uppercase, 0.75rem, wide tracking).

**Color** (tokens in `src/components/CustomStyles.astro`; never hard-code hex in components; check every pair with the skill's `scripts/contrast.py`)

| Token        | Hex  | Use                                                   |
| ------------ | ---- | ----------------------------------------------------- |
| `ink`        | TODO | Dark bands: hero, page headers, footer                |
| `ink-raised` | TODO | Cards on dark bands                                   |
| `primary`    | TODO | Button fills (white text ≥ 4.5:1)                     |
| `secondary`  | TODO | Button hover                                          |
| `link`       | TODO | Small text links and badge labels on white and `mist` |
| `accent`     | TODO | Bright accent, only on `ink`                          |
| `mist`       | TODO | Alternate light sections                              |
| `line`       | TODO | Borders                                               |

- Every text/background pair meets WCAG 2.2 AA. Light-only site (`ui.theme: light:only`).

**Layout and components**

- `max-w-7xl`; sections `py-16 md:py-24`; 4px radius; 1px `line` borders, no shadows.
- Buttons: `btn-site-primary` (light), `btn-site-accent` (on ink), `btn-site-outline-light` (on ink/photos), `btn-site-light` (on primary).
- Site components live in `src/components/site/`; content in `src/data/` (events, network, posts as News).
