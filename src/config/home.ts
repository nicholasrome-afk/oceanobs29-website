// Homepage copy. Edit the words here; src/pages/index.astro only handles layout.
// Empty arrays / strings hide their section.
//
// Where the words come from (Phase 2 sample, 2026-10-18):
//   [old site]  copied from oceanobs29.net (migration/content/index.md)
//   [draft]     written by Claude for review

export const HOME = {
  hero: {
    /** Falling Walls-style label box above the headline. [old site: FAQ; deck: October] */
    place: 'Qingdao, China',
    year: 'October 2029',
    /** Headline in two weights (Slush-style): a lighter lead-in, then the emphasis. [old site] */
    headlineLead: 'Shaping the next decade of',
    headlineEmphasis: 'global ocean observing',
    /** [old site] */
    intro:
      'A decadal forum bringing together the global ocean community to define priorities, strengthen coordination, and ensure ocean observing remains scientifically robust, societally relevant, and fit for the future.',
    primary: { text: 'Get involved', href: '/get-involved' },
    secondary: { text: 'Become a partner', href: '/partners' },
  },

  vision: {
    eyebrow: 'The vision',
    /** [old site] */
    title: 'Why OceanObs’29 matters now',
    lead: 'Ocean observing faces increasing demands alongside growing constraints. At the same time, expectations for actionable, interoperable, and sustained data continue to rise.',
    body: 'OceanObs’29 is the next in a series of international decadal conferences that guide the evolution of sustained, integrated ocean observing systems. Building on the legacy of OceanObs’99, ’09, and ’19, it will focus on aligning scientific ambition, technological innovation, and user needs across the global ocean observing enterprise.',
    /** The decadal series. [deck: Planning update, Oct 2026, slide 2] */
    series: [
      {
        name: 'OceanObs’99',
        year: '1999',
        place: 'Saint-Raphaël, France',
        size: 'About 300 attendees',
        legacy: 'Galvanized the physical observing community',
      },
      {
        name: 'OceanObs’09',
        year: '2009',
        place: 'Venice, Italy',
        size: 'About 600 attendees',
        legacy: 'Integrated, sustained observing: the Framework for Ocean Observing',
      },
      {
        name: 'OceanObs’19',
        year: '2019',
        place: 'Honolulu, Hawaiʻi',
        size: '1,500+ attendees',
        legacy: 'Around 130 white papers and the integration of biological observing',
        url: 'https://oceanobs19.net/',
      },
      {
        name: 'OceanObs’29',
        year: '2029',
        place: 'Qingdao, China',
        size: 'October 2029',
        legacy: 'Priorities, coordination, and future readiness for the next decade',
        current: true,
      },
    ] as { name: string; year: string; place: string; size: string; legacy: string; url?: string; current?: boolean }[],
  },

  future: {
    eyebrow: 'Shaping the future',
    /** [draft] */
    title: 'What OceanObs’29 will do',
    /** Card titles [draft]; card text [old site: "OceanObs’29 will:" list]. Icons: Tabler names. */
    cards: [
      {
        icon: 'tabler:target-arrow',
        title: 'Scientific priorities',
        text: 'Clarify priorities for the next decade of ocean observing.',
      },
      {
        icon: 'tabler:world',
        title: 'Global participation',
        text: 'Strengthen alignment across national, regional, and global efforts.',
      },
      {
        icon: 'tabler:users-group',
        title: 'Societal needs',
        text: 'Connect observing capabilities to scientific, operational, and societal needs.',
      },
      {
        icon: 'tabler:bulb',
        title: 'Innovation',
        text: 'Inform future investments, partnerships, and innovation pathways.',
      },
    ],
  },

  involved: {
    eyebrow: 'Get involved',
    /** [old site] */
    title: 'A community-driven process',
    intro:
      'Opportunities to engage will include community input and listening sessions, targeted discussions on emerging challenges and opportunities, and contributions to synthesis activities leading up to the conference.',
    /** Audience cards (Slush-style). Audiences [old site]; card text [draft]. */
    audiences: [
      {
        label: 'Researchers & technologists',
        text: 'Bring your science and technology to the community input that will inform the conference themes.',
      },
      {
        label: 'Early career ocean professionals',
        text: 'Early career ocean professional (ECOP) perspectives are built into OceanObs’29 planning, from the Program Committee onward.',
      },
      {
        label: 'Operational agencies & data providers',
        text: 'Help connect observing capabilities to the operational services and data people rely on.',
      },
      {
        label: 'Data users & decision-makers',
        text: 'Tell us what you need from ocean observations, so the next decade of observing delivers it.',
      },
    ],
    link: { text: 'Ways to get involved', href: '/get-involved' },
  },

  /** "Toward 2029" timeline. [deck: Planning update, Oct 2026, slides 2 and 7] Full roadmap: src/data/roadmap.ts. */
  timeline: {
    eyebrow: 'Toward 2029',
    title: 'The road to Qingdao',
    steps: [
      {
        year: '2019',
        title: 'OceanObs’19',
        text: 'Honolulu brought together more than 1,500 participants and produced around 130 white papers.',
      },
      {
        year: '2026',
        title: 'Launch',
        text: 'A community town hall at Ocean Sciences Meeting 2026, the Program Committee and International Advisory Committee in place, six working groups launched, and the ECOP Committee established.',
        current: true,
      },
      {
        year: '2027',
        title: 'Community input',
        text: 'The topical paper abstract call is planned to open (dates to be confirmed), and the Sponsors Committee to be formalized.',
      },
      {
        year: '2028',
        title: 'Preparing the conference',
        text: 'The Local Organizing Committee is planned to form, with a planned side event at the UN Ocean Conference.',
      },
      {
        year: '2029',
        title: 'OceanObs’29',
        text: 'The conference convenes in Qingdao, China, in October, followed by policy briefs and synthesis papers.',
      },
    ],
  },

  partner: {
    eyebrow: 'Partners',
    title: 'Become a partner',
    /** [draft] */
    text: 'OceanObs’29 brings together the institutions, agencies and companies that build and use the global ocean observing system. Partnership supports the community process leading to 2029 and the conference itself.',
    link: { text: 'Partnership opportunities', href: '/partners' },
    contact: {
      text: 'Email us about partnership',
      href: 'mailto:info@oceanobs29.net?subject=OceanObs%E2%80%9929%20partnership',
    },
  },

  connect: {
    eyebrow: 'Stay connected',
    title: 'Questions, ideas, or want to take part?',
    /** [old site: footer] */
    text: 'For questions or general inquiries, contact the OceanObs’29 Coordination Team.',
  },

  /** Partners section heading on the homepage, shown only once src/data/network.yaml has entries. */
  network: {
    eyebrow: 'Partners',
    title: 'Our partners',
    intro: '',
    groups: [{ type: 'partner', title: 'Partners' }],
  },
};

/**
 * Details for each conference that events are grouped under (the `conference`
 * field on an event). Add a row when a new meeting is added.
 */
export const CONFERENCES: Record<string, { name: string; place?: string; programmeUrl?: string }> = {
  OSM26: { name: 'Ocean Sciences Meeting 2026', place: 'Glasgow, Scotland' },
};
