// Registry of every photo used in the site's design, with its credit and
// license. Pages read images from here (never import photos directly), so
// swapping a photo is a one-line change and credits are never lost.
// See docs/IMAGERY_PLAN.md for the shot list and approved sources.
import type { ImageMetadata } from 'astro';

import oceanFromIss from '~/assets/images/site/hero-ocean-from-iss.jpg';
import heroVideoPoster from '~/assets/images/site/hero-video-poster.jpg';
import aguLogo from '~/assets/images/logos/agu26-annual-meeting.png';
import oceanDecadeLogo from '~/assets/images/logos/ocean-decade-2021-2030.png';
import workshopCover from '~/assets/images/site/workshop-summary-2026-cover.jpg';

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

// Not in the registry because it is not shown on any page: the social share card
// src/assets/images/share-oceanobs29.jpg (set in src/config.yaml, openGraph.images)
// is derived from the homeHero photo (NASA, public domain) plus the OceanObs’29 logo.
export const IMAGES: Record<'homeHero', SiteImage> = {
  /**
   * Basis of the social share card (the homepage hero itself is now HERO_VIDEO below). No longer shown on
   * the Partners page (removed 2026-11-22, website update brief).
   */
  homeHero: {
    src: oceanFromIss,
    // Decorative backdrop behind the headline, so screen readers skip it (red-team review, 2026-10-19).
    // Description for reference: the Philippine Sea from the ISS, clouds over a sunlit ocean.
    alt: '',
    credit: 'NASA',
    license: 'Public domain',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cloudscape_Over_the_Philippine_Sea.jpg',
    // Original 4928px from Commons, saved at 3200px in sRGB with metadata removed (2026-10-18).
    placeholder: false,
    position: '60% 40%',
  },
};

// The OOI glider photo (About page) was removed with its credit on 2026-11-22 (website update brief);
// add approved documentary photos through a shared image register first (see docs/IMAGERY_PLAN.md).
// The OceanOPS network map (hero-network-map.jpg, `npm run map`) was removed from the
// homepage on 2026-11-21 at the project lead's request; the script and files remain unused.

/**
 * Homepage hero video: an original OceanObs’29 production (no third-party rights), added 2026-11-20.
 * Source: "OceanObs29 Hero_optimized.mp4" (1920×1080 H.264, 35 s, no audio, 8.8 MB, fast-start).
 * The file lives in public/video/ so it is served as-is. The poster is the 29-second frame, shown
 * before the video loads and instead of it for reduced-motion or data-saver visitors.
 */
export const HERO_VIDEO = {
  src: '/video/oceanobs29-hero.mp4',
  type: 'video/mp4',
  poster: heroVideoPoster,
  credit: 'OceanObs’29',
  license: 'Original work by OceanObs’29',
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

/**
 * Logos shown beside events (the `logo` field on an event in src/data/events). Added 2026-11-22 at the
 * project lead's request. Show them unaltered, full colour, on white, with clear space around them.
 */
export const EVENT_LOGOS = {
  /** Supplied by the project lead (2026-11-22), as provided by AGU for the 2026 Annual Meeting. */
  agu26: {
    src: aguLogo,
    alt: 'AGU Annual Meeting, 7–11 December 2026, San Francisco, CA',
    /** Display height in px; width follows the artwork. */
    height: 56,
    padding: 0,
  },
  /**
   * Official full-colour Ocean Decade logo, rendered unaltered from the UN Ocean Decade Brand Toolkit
   * (UNESCO-IOC, 2024, p. 19). Toolkit rules: full colour, no borders or effects, never altered, on white,
   * with a clear margin the height of the "0" in "2030" (about 11% of the logo height). Non-UN use needs
   * UNESCO-IOC approval or an endorsed Decade Action, and the logo may only identify Decade-related events.
   * APPROVAL: the Ocean Decade Coordination Team (UNESCO-IOC) approved OceanObs’29's use of the logo on
   * related promotional materials by email on 15 April 2025, as the conference is part of the Decade
   * Implementation Plan (DIP) mandate, and asked that the Branding Guidelines be followed. The approval
   * email is held by the project lead.
   */
  'ocean-decade': {
    src: oceanDecadeLogo,
    alt: 'UN Decade of Ocean Science for Sustainable Development 2021–2030',
    height: 112,
    padding: 12,
  },
} satisfies Record<string, { src: ImageMetadata; alt: string; height: number; padding: number }>;

export type EventLogoKey = keyof typeof EVENT_LOGOS;

/** Cover of the Program Committee workshop summary (rendered from page 1 of the report's PDF). */
export const WORKSHOP_SUMMARY = {
  cover: workshopCover,
  coverAlt:
    'Cover of the workshop summary: Program Committee members on stage at the inauguration and appointment ceremony.',
  href: '/docs/oceanobs29-program-committee-workshop-summary-2026.pdf',
};
