// Homepage copy. Edit the words here; src/pages/index.astro only handles layout.
//
// Simplified 2026-11-22 per the website update brief, then reordered the same day at the project lead's
// request: hero → About OceanObs (four short sections) → Upcoming Events → footer contact. The "Why ocean
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

  // ── About OceanObs, below the hero video. Text supplied by the project lead (2026-11-22), used as written;
  //    link destinations theirs too, checked 2026-11-22. "(PDF)" in link text added by Claude. The OceanObs’09
  //    site has no HTTPS version, so that link stays http://.
  about: {
    titleLead: 'OceanObs’29',
    titleEmphasis: 'The global conference for ocean observing',
    text: 'Once a decade, OceanObs brings together the global community that observes the ocean and uses what we learn from it. OceanObs is a grassroots initiative shaped by people across the full observing value chain, from those who design instruments and collect measurements to those who turn data into forecasts, services, and decisions.',
  },

  whyObserving: {
    title: 'Why ocean observing matters',
    text: 'Ocean observations help us forecast storms, track sea-level rise, and understand how marine life is changing. Satellites, ships, floats, and coastal stations measure different parts of the ocean. Together, they give us a picture of how it changes over time. Keeping that picture up to date takes sustained measurements, shared data, and cooperation across countries and disciplines.',
    link: {
      text: 'Global Ocean Observing System status report',
      href: 'https://www.ocean-ops.org/goosreport/2026/#home',
    },
  },

  conference: {
    title: 'What a global conference makes possible',
    text: 'OceanObs gives the community a once-a-decade opportunity to agree on shared priorities, advance work that takes coordination across networks and regions, and start new partnerships and projects. Each conference has helped move a different part of that work forward.',
    past: [
      {
        name: 'OceanObs’99',
        text: 'OceanObs’99 rallied international support for Argo, the global fleet of floats that measures ocean temperature and salinity.',
        link: {
          text: 'IOC conference account (PDF)',
          href: 'https://www.jodc.go.jp/info/ioc_doc/INF/GOOS_081_Status_99.pdf',
        },
      },
      {
        name: 'OceanObs’09',
        text: 'OceanObs’09 led to the Framework for Ocean Observing, which provided the basis for transformation of observational data, organized into essential ocean variables, into information that serves a range of science and societal needs.',
        link: { text: 'Framework for Ocean Observing (PDF)', href: 'http://www.oceanobs09.net/foo/FOO_Report.pdf' },
      },
      {
        name: 'OceanObs’19',
        text: 'OceanObs’19 brought greater attention to marine life, ecosystems, and user needs. Community papers and breakouts helped advance initiatives such as the Observing Air-Sea Interactions Strategy, now a UN Ocean Decade programme.',
        link: { text: 'OceanObs’19 archive', href: 'https://oceanobs19.net/conference-archive' },
      },
    ],
  },

  shape: {
    title: 'Help shape the next decade',
    text: 'The work starts before the conference. What gaps in ocean observing should the community tackle together? What decision could better information support? Which partnerships could help sustain that work beyond the UN Ocean Decade?',
    /** Buttons added by Claude (not in the supplied text): same destinations as the hero buttons. */
    primary: { text: 'Get involved', href: '/get-involved' },
    secondary: { text: 'Become a partner', href: '/partners' },
  },
};
