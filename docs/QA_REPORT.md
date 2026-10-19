# QA report: Phase 4

Run on 2026-10-18 against the `site-build` branch, testing both the Cloudflare preview (https://site-build-oceanobs29-website.nicholas-rome.workers.dev) and a local production build (`astro preview`). Target: WCAG 2.2 AA, with a Lighthouse accessibility score of at least 95.

Pages tested: `/`, `/about`, `/conference`, `/get-involved`, `/resources`, `/partners`, `/events`.

## Summary

| Check                                                                                   | Result                                                                                                                   |
| --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| axe-core 4.14.0, tags WCAG 2.0/2.1/2.2 A and AA plus best practice, at 1440px and 375px | **0 violations** on all 14 runs (after fixes)                                                                            |
| Text over photos (axe can't judge it): measured at 375, 768, 1024, 1280 and 1440px      | **85/85 pass** (after fixes)                                                                                             |
| Lighthouse 13.5.0 accessibility                                                         | **100** on every page tested                                                                                             |
| Lighthouse best practices                                                               | **100**                                                                                                                  |
| Lighthouse SEO                                                                          | 69 on the preview (only failure: "blocked from indexing", the intended preview noindex); **100** on the production build |
| Lighthouse performance, desktop                                                         | **100** on all four pages                                                                                                |
| Lighthouse performance, mobile (simulated slow 4G and throttled CPU)                    | Home **93**, About **98**, Conference **99**, News & Events **98**                                                       |
| Layout shift (CLS)                                                                      | **0** everywhere                                                                                                         |
| Horizontal scroll at 375px                                                              | **None** on any page                                                                                                     |
| Internal links                                                                          | **No broken links**                                                                                                      |
| External links                                                                          | 5 of 6 OK; 1 dead link removed (see fixes)                                                                               |
| Old Squarespace URLs                                                                    | All 7 return **301** to the right page or section                                                                        |
| Preview noindex                                                                         | Preview: `noindex, follow` on every page; production build: `index, follow`                                              |
| Keyboard                                                                                | "Skip to content" appears on the first Tab and moves focus past the menu                                                 |

## Issues found and fixed

1. **Hero text contrast at narrow and mid widths.** At 375, 768 and 1024px, bright clouds in the hero photo sat behind the headline, intro, "Become a partner" button and the teal ’29, with contrast as low as 1.0–2.7:1. Fix: below 1280px the hero now uses an even 80% dark overlay; the left-to-right gradient remains on wide screens. All 85 measurements now pass.
   _Method:_ screenshots of the photo behind each text element with the text hidden, comparing the text color with the 95th-percentile brightest background pixel (semi-transparent text blended first). WCAG thresholds: 4.5:1 for body text, 3:1 for large text.
2. **Dead link.** The OSM26 town hall's "Learn more" link (from the old site) pointed to `agu.confex.com`, which no longer resolves. Removed; the event details remain.
3. **Unnecessary third-party connection.** AstroWind pre-connected every visitor's browser to `images.unsplash.com`, which the site doesn't use. Removed.
4. **No skip link.** Added "Skip to content", visible on keyboard focus. WCAG 2.4.1 was already met through page landmarks, but the six-item menu makes the link worthwhile for keyboard users.

Fixes 1–4 were verified on a local production build. The Lighthouse scores above came from the preview before these fixes; none of the fixes should lower them.

## Known items (not blocking)

- **Mobile homepage speed (93).** On simulated slow 4G, the largest element (the headline) appears at 2.8s, just over Google's 2.5s "good" line. Most of the delay is the page waiting for its stylesheet and web fonts before drawing text. Options if it matters later: preload the heading font, or inline the critical CSS.
- **Tightest contrast margin.** The teal ’29 in the hero at 1280px measures 3.3:1 against the 3:1 large-text minimum. It passes, but swapping the hero photo could change this, so re-run the check if that happens.
- **OceanOPS map.** Reuse permission has not been confirmed yet (`pendingPermission` in `src/config/images.ts`).
- **News.** There are no posts yet, so the News sections stay hidden until the first one.

## How to re-run

The tools were installed in a temporary folder outside the repo (Lighthouse 13.5.0 and axe-core 4.14.0 via npm, run with the system Chrome).

- axe: inject `axe.min.js` with `puppeteer-core` and run with tags `wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa, best-practice` at 1440 and 375px.
- Lighthouse: `npx lighthouse <url> --chrome-flags="--headless=new"` for mobile, and the same with `--preset=desktop`.
- Redirects: `curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" <preview>/ad-hoc-committee-1`.
