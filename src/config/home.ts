// Homepage copy. Edit the words here; src/pages/index.astro only handles layout.
//
// Simplified 2026-11-22 per the website update brief, then reordered the same day at the project lead's
// request: hero → About OceanObs (three short sections) → Upcoming Events → footer contact. The "Why ocean
// observations matter" glider example was removed. Earlier, the place/date label, the conference-series
// strip, the vision, objectives, audience and timeline sections and the partner pitch were removed (the
// series history lives on /conference#series, confirmed updates on /events).
//
// Where the words come from:
//   [old site]  copied from oceanobs29.net
//   [brief]     the website update brief (2026-11-22), with its sources noted
//   [lead]      text supplied by the project lead (2026-11-22)

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

  // ── About OceanObs, below the hero video. Revised 2026-11-23 at the project lead's request: framed as more
  //    than a conference, with a stronger case for ocean observing. [lead] = the project lead's text
  //    (2026-11-22); [draft] = written by Claude for review. "What a global conference makes possible" moved
  //    to /conference#series.
  about: {
    /** [draft] */
    titleLead: 'OceanObs’29',
    titleEmphasis: 'A decade of planning for the global ocean observing system',
    /** [lead], with the last sentence [draft]. */
    text: 'Once a decade, OceanObs brings together the global community that observes the ocean and uses what we learn from it. OceanObs is a grassroots initiative shaped by people across the full observing value chain, from those who design instruments and collect measurements to those who turn data into forecasts, services, and decisions. The conference is the focal point of a longer process: the work starts years before it and carries on long after.',
    /** Before, at, and after the conference. [draft] */
    phases: [
      {
        icon: 'tabler:speakerphone',
        title: 'Before the conference',
        text: 'Town halls, written input, and planning meetings identify observing gaps and the decisions better information could support.',
      },
      {
        icon: 'tabler:users-group',
        title: 'At the conference',
        text: 'The community comes together to agree on shared priorities for the next decade of ocean observing.',
      },
      {
        icon: 'tabler:route',
        title: 'After the conference',
        text: 'Networks, programs, and partnerships carry those priorities forward, to 2040 and beyond.',
      },
    ],
  },

  /**
   * [draft] Reframed from the project lead's text (2026-11-22). Claims kept general: the ocean has taken up
   * most of the extra heat from greenhouse gases (IPCC AR6 WG1: over 90% of the energy accumulating in the
   * climate system since 1971).
   */
  whyObserving: {
    title: 'Why ocean observing matters',
    lead: 'The ocean shapes the weather we live with, the climate we are changing, and the food and livelihoods of communities worldwide. We can only manage what we can see.',
    reasons: [
      {
        icon: 'tabler:cloud-storm',
        title: 'Safer coasts',
        text: 'Ocean measurements feed the forecasts and warnings that help communities prepare for storms, flooding, and marine heatwaves.',
      },
      {
        icon: 'tabler:temperature-plus',
        title: 'A changing climate',
        text: 'The ocean has absorbed most of the extra heat trapped by greenhouse gases. Observations track that warming and the sea-level rise that follows.',
      },
      {
        icon: 'tabler:fish',
        title: 'Living oceans',
        text: 'Fisheries, coastal economies, and marine ecosystems depend on knowing how ocean conditions and marine life are changing.',
      },
    ],
    /** [lead], lightly reordered. */
    closing:
      'No single country or instrument can watch the whole ocean. Satellites, ships, floats, and coastal stations each measure part of it. Keeping the full picture up to date takes sustained measurements, shared data, and cooperation across countries and disciplines.',
    link: {
      text: 'Global Ocean Observing System status report',
      href: 'https://www.ocean-ops.org/goosreport/2026/#home',
    },
  },

  shape: {
    title: 'Help shape the next decade',
    text: 'The work starts before the conference. What gaps in ocean observing should the community tackle together? What decision could better information support? Which partnerships could help sustain that work beyond the UN Ocean Decade?',
    /** Buttons added by Claude (not in the supplied text): same destinations as the hero buttons. */
    primary: { text: 'Get involved', href: '/get-involved' },
    secondary: { text: 'Become a partner', href: '/partners' },
  },
};
