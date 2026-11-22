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

## Hero video update (2026-11-21)

The homepage hero changed: the video is pinned while the headline scrolls over it (after OceanX), plays once and stops on its logo end card (the headline fades until the visitor scrolls, presses a key, tabs in or presses Replay), and the dark overlay now sits only behind the text and moves with it. The OceanOPS map section was removed from the homepage.

- **Contrast:** 1,063 measurements of every hero text element over 9 video frames (1–33 s), at 375, 768, 1024, 1280 and 1440px, at scroll 0 and 350px: all pass. Lowest: 5.2:1 for small text (need 4.5) and 4.7:1 for the teal ’29 (need 3). The place/date label has its own dark backing, since it sits highest over the video.
- **axe-core 4.10:** no violations on the homepage at 320, 375 and 1440px, with and without reduced motion.
- **Reduced motion / data saver:** no video, no pinning, no fading; the poster frame shows. No sideways scrolling at 320px.

## Editorial update (2026-11-22)

All seven pages were revised per the website update brief (`oceanobs29-website-update-instructions.md`), tested on a local dev build:

- **axe-core 4.10:** 0 violations on all 7 pages at 1440px and 390px (one footer finding, an email link not underlined inside a line of text, was fixed).
- **Hero contrast** (hero text moved: place/date label and series strip removed): 333 measurements over 9 video frames at 375–1440px, scroll 0 and 350px: all pass. Lowest 8.8:1 for body text, 6.4:1 for the headline.
- **Layout:** no horizontal scroll at 390px; no skipped heading levels; skip link is the first Tab stop; phone menu opens with Enter and shows all 6 links.
- **Links:** every internal link and `#anchor` in the build resolves, including the old Squarespace redirects.
- **Stale facts:** the built HTML (copy, titles, descriptions, Open Graph) has no October date, ~3,000 figure, abstract call, paper counts, 2040 roadmap or "Other organizations"; Qingdao appears once in Conference body copy (plus one committee affiliation).
- **Partnership tool:** keyboard-tested at 390px for Sponsors, Foundations and Private companies: each has its own options, result text and email draft; switching back restores earlier choices.
- **Upcoming events:** an event leaves the Home and News & Events upcoming lists when it ends in its own time zone (tested by faking the clock at 13:59 and 14:01 PST on 10 Dec 2026, and after Rio). It moves into Past events at the next build.

### Follow-up revision (2026-11-22, project lead's requests)

- **Changes:** ECOP Committee section added after the Program Committee on About (no names yet). Removed: Conference logistics section, Get Involved "Who should take part?", Resources publication-updates note and white-paper examples. Program Committee workshop summary (PDF) added at the top of Resources. AGU26 Annual Meeting logo beside the AGU town hall and the Ocean Decade logo beside the 2027 Ocean Decade Conference (Home and News & Events). Oxford comma applied throughout.
- **Checks:** axe 0 violations on all 7 pages at 1440 and 390px; no horizontal scroll; all internal links, anchors, and the PDF resolve; a scan of visible text, titles, and descriptions found no remaining list without a serial comma (except the official name "Indonesian Agency for Meteorology, Climatology and Geophysics", left as the agency writes it).

## Known items (not blocking)

- **Mobile homepage speed (93).** On simulated slow 4G, the largest element (the headline) appears at 2.8s, just over Google's 2.5s "good" line. Most of the delay is the page waiting for its stylesheet and web fonts before drawing text. Options if it matters later: preload the heading font, or inline the critical CSS.
- **Hero contrast depends on the video.** All hero text passes over the current video (see above). If the video is replaced, re-run the contrast check.
- **OceanOPS map.** No longer shown (removed 2026-11-21), so its reuse permission no longer blocks launch. The script and files remain if it comes back.
- **News.** There are no posts yet, so the News sections stay hidden until the first one.

## How to re-run

The tools were installed in a temporary folder outside the repo (Lighthouse 13.5.0 and axe-core 4.14.0 via npm, run with the system Chrome).

- axe: inject `axe.min.js` with `puppeteer-core` and run with tags `wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa, best-practice` at 1440 and 375px.
- Lighthouse: `npx lighthouse <url> --chrome-flags="--headless=new"` for mobile, and the same with `--preset=desktop`.
- Redirects: `curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" <preview>/ad-hoc-committee-1`.
