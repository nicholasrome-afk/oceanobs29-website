export const opportunities = {
  outreach: {
    title: 'Outreach and communications',
    support: 'Targeted funding',
    description: 'Help share planning updates and findings through accessible design, translation and outreach.',
  },
  participation: {
    title: 'Early-career participation',
    support: 'Targeted funding',
    description:
      'Help early-career ocean professionals and others with limited travel support take part in meetings and consultations.',
  },
  dialogues: {
    title: 'Regional dialogues',
    support: 'Targeted funding',
    description: 'Help convene regional discussions so more communities can contribute to the ocean observing roadmap.',
  },
  papers: {
    title: 'Community papers',
    support: 'Targeted funding',
    description:
      'Support editorial coordination and help share findings from community papers with the wider ocean observing community.',
  },
  coordination: {
    title: 'Program coordination',
    support: 'Pooled support',
    description: 'Help fund staff to coordinate committees, follow up on decisions and keep the planning work moving.',
  },
  tools: {
    title: 'Tools and technical expertise',
    support: 'In-kind support',
    description: 'Offer tools or staff time for data visualization, virtual participation or communications.',
  },
  services: {
    title: 'Meeting and access support',
    support: 'In-kind support',
    description: 'Offer meeting space, accessibility services or staff time to help more people participate.',
  },
};

export type OpportunityKey = keyof typeof opportunities;

export const profiles = {
  sponsor: {
    label: 'Sponsors',
    name: 'a program sponsor',
    opportunities: ['outreach', 'participation', 'dialogues'],
    goals: {
      'Public recognition': 'Acknowledgment in materials for the specific activity you support, where appropriate.',
      'Community engagement':
        'Ways to take part in relevant public activities or approved discussions connected to your support.',
      'Updates on the activity':
        'A concise update on what your support made possible and how the activity reached the community.',
    },
  },
  foundation: {
    label: 'Foundations',
    name: 'a foundation',
    opportunities: ['participation', 'papers', 'coordination'],
    goals: {
      'Measurable impact':
        'Agree on measures that fit the grant, such as how many people took part, which regions they represented or how broadly findings were shared.',
      'Grant scope and reporting': 'Define the work, milestones and reporting schedule around your grant priorities.',
      'Public access to findings':
        'Agree on which findings or materials can be shared publicly and how they can reach the people who will use them.',
    },
  },
  company: {
    label: 'Private companies',
    name: 'a private company',
    opportunities: ['tools', 'dialogues', 'outreach'],
    goals: {
      'Applying our expertise': 'Identify a specific need your team can help meet and agree on the scope and timing.',
      'Cross-sector exchange':
        'Explore relevant discussions where your team could share practical experience and learn from others.',
      'Recognition for our contribution':
        'Discuss how the program could acknowledge your organization’s specific contribution.',
    },
  },
  other: {
    label: 'Other organizations',
    name: 'a potential institutional partner',
    opportunities: ['coordination', 'dialogues', 'services'],
    goals: {
      'Alignment with our mission':
        'Find where the program’s work aligns with your mandate and define a shared outcome.',
      'Connecting our networks':
        'Explore ways to bring relevant regional, research or professional networks into the work.',
      'Sharing staff or resources': 'Agree on who would provide staff time, services or access to shared facilities.',
    },
  },
} satisfies Record<
  string,
  { label: string; name: string; opportunities: OpportunityKey[]; goals: Record<string, string> }
>;

export type ProfileKey = keyof typeof profiles;

export const contributionRanges = ['$25,000–$49,999', '$50,000–$149,999', '$150,000–$299,999', '$300,000+'];
