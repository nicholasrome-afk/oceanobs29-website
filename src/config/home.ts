// Homepage copy. Edit the words here; src/pages/index.astro only handles layout.
//
// Simplified 2026-11-22 per the website update brief: hero → Upcoming Events → science feature → footer
// contact. The place/date label, the conference-series strip, the vision, objectives, audience and
// timeline sections and the partner pitch were removed (the series history now lives on
// /conference#series, confirmed updates on /events).
//
// Where the words come from:
//   [old site]  copied from oceanobs29.net
//   [brief]     the website update brief (2026-11-22), with its sources noted

export const HOME = {
  hero: {
    /** Headline in two weights: a lighter lead-in, then the emphasis. [old site] */
    headlineLead: 'Shaping the next decade of',
    headlineEmphasis: 'global ocean observing',
    /** [brief] */
    intro:
      'OceanObs’29 brings together the people who collect, share, and use ocean observations to set priorities for the next decade.',
    primary: { text: 'Get involved', href: '/get-involved' },
    secondary: { text: 'Become a partner', href: '/partners' },
  },

  /** Upcoming Events: the next two from src/data/events (shared with News & Events). */
  events: {
    title: 'Upcoming Events',
    link: { text: 'All news and events', href: '/events' },
  },

  /**
   * One short science example. [brief] Sources: OceanGliders Community White Paper (Frontiers in Marine
   * Science, 2019, doi:10.3389/fmars.2019.00422).
   */
  science: {
    title: 'Why ocean observations matter',
    text: 'Heat below the ocean surface can influence how a tropical storm develops. Autonomous gliders measure temperature through the upper ocean and can send those observations to forecast centers. OceanObs’19 contributors identified storm forecasting as a use for sustained glider observations. Where would better coverage make the biggest difference?',
    link: { text: 'OceanObs’19 observing research', href: '/resources#archives' },
  },
};
