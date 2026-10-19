// Registry of every photo used in the site's design, with its credit and
// license. Pages read images from here (never import photos directly), so
// swapping a photo is a one-line change and credits are never lost.
// See docs/IMAGERY_PLAN.md for the shot list and approved sources.
import type { ImageMetadata } from 'astro';

import oceanFromIss from '~/assets/images/site/hero-ocean-from-iss.jpg';
import gliderDeployment from '~/assets/images/site/about-glider-deployment.jpg';
import networkMap from '~/assets/images/site/hero-network-map.jpg';

export interface SiteImage {
  src: ImageMetadata;
  /** Describe what is shown. Use '' only for purely decorative images. */
  alt: string;
  /** Credit line as the source asks for it, e.g. "NOAA Photo Library". Omit if unknown. */
  credit?: string;
  /** e.g. "Public domain", "CC BY-NC-SA 4.0", "Used with permission (Partner, 2026-11)". */
  license: string;
  sourceUrl?: string;
  /** True for temporary images that must be replaced before launch. */
  placeholder: boolean;
  /** CSS object-position used when the image is cropped, e.g. '30% 60%'. */
  position?: string;
  /** True while written permission from the source is still being confirmed. */
  pendingPermission?: boolean;
}

export const IMAGES: Record<'homeHero' | 'aboutFeature' | 'networkMap', SiteImage> = {
  /** Home hero: full-bleed behind left-aligned text. */
  homeHero: {
    src: oceanFromIss,
    alt: 'The Philippine Sea seen from the International Space Station, with clouds over a sunlit ocean and the thin blue line of the atmosphere on the horizon.',
    credit: 'NASA',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cloudscape_Over_the_Philippine_Sea.jpg',
    // 960px preview while the design is reviewed: swap in the original (4928px) before launch.
    placeholder: true,
    position: '60% 40%',
  },
  /** About page feature photo. */
  aboutFeature: {
    src: gliderDeployment,
    alt: 'Two technicians on a ship’s deck prepare yellow ocean gliders for deployment beside a large blue surface buoy.',
    credit: 'Ocean Observatories Initiative',
    license: 'Public domain (OOI image policy)',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Glider_deployment_(OOI_592).jpg',
    // 960px preview while the design is reviewed: swap in the original (4032px) before launch.
    placeholder: true,
  },
  /** Live map of ocean observing platforms (written by `npm run map`). */
  networkMap: {
    src: networkMap,
    alt: 'World map with thousands of dots across every ocean, each an observing platform such as an Argo float, drifting buoy or ship that reported its position in the last 30 days.',
    credit: 'Data: OceanOPS (WMO-IOC); land: Natural Earth',
    license: 'Rendered for this site from OceanOPS data',
    sourceUrl: 'https://www.ocean-ops.org/board',
    placeholder: false,
    // OceanOPS publishes no reuse license: confirm with them before launch.
    pendingPermission: true,
  },
};

if (import.meta.env.PROD) {
  const flagged = (test: (image: SiteImage) => boolean | undefined) =>
    Object.entries(IMAGES)
      .filter(([, image]) => test(image))
      .map(([slot]) => slot);
  const placeholders = flagged((i) => i.placeholder);
  const pending = flagged((i) => i.pendingPermission);
  if (placeholders.length) {
    console.warn(`[images] Placeholder photos still in use: ${placeholders.join(', ')} (see docs/IMAGERY_PLAN.md)`);
  }
  if (pending.length) {
    console.warn(`[images] Reuse permission still to be confirmed for: ${pending.join(', ')}`);
  }
}
