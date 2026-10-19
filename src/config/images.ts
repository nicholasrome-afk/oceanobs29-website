// Registry of every photo used in the site's design, with its credit and
// license. Pages read images from here (never import photos directly), so
// swapping a photo is a one-line change and credits are never lost.
// See docs/IMAGERY_PLAN.md for the shot list and approved sources.
import type { ImageMetadata } from 'astro';

import templatePlaceholder from '~/assets/images/site/placeholder.jpg';

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

export const IMAGES: Record<'homeHero' | 'spotlight', SiteImage> = {
  /** Home hero: full-bleed behind left-aligned text. Wide (≥2400px) landscape, calm area on the left. */
  homeHero: {
    src: templatePlaceholder,
    alt: '',
    license: 'Template placeholder',
    placeholder: true,
  },
  /** Home spotlight tile: one clear subject (it crops tightly). */
  spotlight: {
    src: templatePlaceholder,
    alt: '',
    license: 'Template placeholder',
    placeholder: true,
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
