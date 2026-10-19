// Homepage copy. Edit the words here; src/pages/index.astro only handles layout.
// Empty arrays / strings hide their section.
//
// SETUP: replace every TODO. Draft copy from the crawled old site
// (migration/content/) and mark anything you wrote yourself for the user to review.

export const HOME = {
  hero: {
    /** Small label above the headline (defaults to the org name). */
    eyebrow: '',
    headline: 'TODO: one strong sentence about what the organization makes possible.',
    intro: 'TODO: one or two sentences on what the organization does and for whom.',
    primary: { text: 'What we do', href: '#about' },
    secondary: { text: 'Events', href: '/events' },
  },

  /** Three-word pillar bar under the hero (after Schmidt Ocean's INNOVATE | EXPLORE | SHARE). [] hides it. */
  pillars: [
    { word: 'TODO', text: 'TODO one line.' },
    { word: 'TODO', text: 'TODO one line.' },
    { word: 'TODO', text: 'TODO one line.' },
  ],

  about: {
    eyebrow: 'What we do',
    title: 'TODO section title',
    /** First paragraph (larger), then supporting paragraph. */
    lead: 'TODO: the mission in one or two sentences.',
    body: '',
    /** Theme cards (2–4). Icons: any Tabler name, e.g. tabler:world, tabler:users. */
    themes: [
      { icon: 'tabler:world', title: 'TODO theme', text: 'TODO one line.' },
      { icon: 'tabler:users', title: 'TODO theme', text: 'TODO one line.' },
    ],
  },

  /** Second spotlight tile next to the featured event. null hides it. */
  secondaryTile: null as null | { eyebrow: string; title: string; text: string; link: { text: string; href: string } },

  network: {
    eyebrow: 'Our network',
    title: 'Partners and programmes',
    intro: '',
    /** Headings for each `type` in src/data/network.yaml, in display order. */
    groups: [
      { type: 'partner', title: 'Partners' },
      { type: 'programme', title: 'Programmes' },
    ],
  },
};

/**
 * Details for each conference that events are grouped under (the `conference`
 * field on an event). Add a row when a new meeting is added.
 */
export const CONFERENCES: Record<string, { name: string; place?: string; programmeUrl?: string }> = {};
