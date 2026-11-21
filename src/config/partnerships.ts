import { ORG } from './org';

const email = ORG.contacts[0].email;
const subject = 'OceanObs’29 funding conversation';

export const fundingContact = {
  label: 'Talk with us about funding',
  email,
  href: `mailto:${email}?subject=${encodeURIComponent(subject)}`,
};

export const opportunities = {
  outreach: {
    title: 'Outreach and communications',
    support: 'Targeted funding',
    description: 'Help share planning updates and findings through accessible design, translation and outreach.',
  },
  participation: {
    title: 'Regional and early-career participation',
    support: 'Targeted funding',
    description:
      'Help early-career ocean professionals and people from underrepresented regions take part through supported consultations, accessible materials and participation funding.',
  },
  dialogues: {
    title: 'Regional dialogues',
    support: 'Targeted funding',
    description: 'Help convene regional discussions so more communities can contribute to the ocean observing roadmap.',
  },
  papers: {
    title: 'Scientific synthesis',
    support: 'Targeted funding',
    description:
      'Bring existing evidence together and turn priority gaps into questions for the OceanObs’29 community papers.',
  },
  coordination: {
    title: 'First phase of the 2040 roadmap',
    support: 'Program funding',
    description:
      'Support the 2027 consultations, scientific synthesis and preparation for the OceanObs’29 community papers.',
  },
  applications: {
    title: 'Practical uses of ocean data',
    support: 'Targeted funding',
    description:
      'Bring forecast teams, observing networks and industry practitioners together to document where better data could improve a real decision.',
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
    opportunities: ['outreach', 'participation', 'dialogues', 'applications', 'coordination'],
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
    opportunities: ['coordination', 'papers', 'participation'],
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
    opportunities: ['applications', 'coordination', 'dialogues', 'outreach', 'tools'],
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
