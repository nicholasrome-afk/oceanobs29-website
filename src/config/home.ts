// Homepage copy. Edit the words here; src/pages/index.astro only handles layout.
// Empty arrays / strings hide their section.
//
// Where the words come from (Phase 2 sample, 2026-10-18):
//   [old site]  copied from oceanobs29.net (migration/content/index.md)
//   [draft]     written by Claude for review

export const HOME = {
  hero: {
    /** Falling Walls-style label box above the headline. [old site: FAQ] */
    place: 'Qingdao, China',
    year: '2029',
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
    /** The decadal series. [old site: years only] */
    series: [
      { name: 'OceanObs’99', year: '1999' },
      { name: 'OceanObs’09', year: '2009' },
      { name: 'OceanObs’19', year: '2019' },
      { name: 'OceanObs’29', year: '2029', current: true },
    ],
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
        text: 'Early career perspectives are built into OceanObs’29 planning, from the Program Committee onward.',
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

  /** "Toward 2029" timeline. [draft] from facts on the old site and the project brief. */
  timeline: {
    eyebrow: 'Toward 2029',
    title: 'The road to Qingdao',
    steps: [
      { year: '2019', title: 'OceanObs’19', text: 'The previous conference in the decadal series.' },
      {
        year: '2026',
        title: 'Community engagement begins',
        text: 'The Program Committee and International Advisory Committee are in place, and the first community town hall is held at Ocean Sciences Meeting 2026.',
        current: true,
      },
      {
        year: '2027',
        title: 'Local Organizing Committee',
        text: 'Expected to be established, and the conference dates confirmed.',
      },
      { year: '2029', title: 'OceanObs’29', text: 'The conference convenes in Qingdao, China.' },
      {
        year: '2030',
        title: 'Beyond the Ocean Decade',
        text: 'Outcomes carry ocean observing into the decade after the UN Decade of Ocean Science (2021–2030).',
      },
    ],
  },

  partner: {
    eyebrow: 'Partners',
    title: 'Become a partner',
    /** [draft] */
    text: 'OceanObs’29 brings together the institutions, agencies and companies that build and use the global ocean observing system. Partnership supports the community process leading to 2029 and the conference itself.',
    link: { text: 'Partnership opportunities', href: '/partners' },
    contact: { text: 'Talk to us', href: 'mailto:info@oceanobs29.net?subject=OceanObs%E2%80%9929%20partnership' },
  },

  connect: {
    eyebrow: 'Stay connected',
    title: 'Questions, ideas, or want to take part?',
    /** [old site: footer] */
    text: 'For questions or general inquiries, contact the OceanObs’29 coordination team.',
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
