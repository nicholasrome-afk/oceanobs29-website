// Partnership tool and contact (Partners page). Updated 2026-11-22 per the website update brief:
// the "Other organizations" profile, the dated 2027 / 2040 roadmap option and the community-paper option
// were removed; organizations outside the three profiles use the general contact route.
// Wording: earlier Partners session drafts, edited by Claude for review.
import { ORG } from './org';

const email = ORG.contacts[0].email;
const subject = 'OceanObs’29 partnership conversation';

export const partnershipContact = {
  label: 'Start a partnership conversation',
  email,
  href: `mailto:${email}?subject=${encodeURIComponent(subject)}`,
};

/** Topics for discussion: none of these is a scheduled program or a guaranteed benefit. */
export const opportunities = {
  outreach: {
    title: 'Accessible materials and outreach',
    support: 'Targeted funding',
    description:
      'Help share planning updates and findings through accessible design, translation, and community outreach.',
  },
  participation: {
    title: 'Regional and early career participation',
    support: 'Targeted funding',
    description:
      'Make it easier for early career ocean professionals and people from underrepresented regions to join discussions, for example through accessible materials or support to take part.',
  },
  dialogues: {
    title: 'Regional discussions',
    support: 'Targeted funding',
    description: 'Help convene regional discussions so more communities can share their observing priorities.',
  },
  applications: {
    title: 'Better use of ocean data',
    support: 'Targeted funding',
    description:
      'Bring forecast teams, observing networks, and practitioners together to document where better data could improve a real decision.',
  },
  tools: {
    title: 'Tools and technical expertise',
    support: 'In-kind support',
    description: 'Offer tools or staff time for data visualization, virtual participation, or communications.',
  },
  services: {
    title: 'Meeting and access support',
    support: 'In-kind support',
    description: 'Offer meeting space, accessibility services, or staff time for a specific activity.',
  },
};

export type OpportunityKey = keyof typeof opportunities;

export const profiles = {
  sponsor: {
    label: 'Sponsors',
    name: 'a potential sponsor',
    opportunities: ['outreach', 'participation', 'dialogues', 'applications'],
    goals: {
      'Public recognition': 'Appropriate acknowledgment in materials for the specific activity you support.',
      'Community engagement':
        'Ways to take part in relevant public activities or approved discussions connected to your support.',
      'Updates on the activity':
        'A concise update on what your support made possible and how the activity reached the community.',
    },
  },
  foundation: {
    label: 'Foundations',
    name: 'a foundation',
    opportunities: ['participation', 'dialogues', 'applications', 'outreach'],
    goals: {
      'Measurable impact':
        'Measures that fit the grant, such as how many people took part, which regions they represented, or how broadly findings were shared.',
      'Grant scope and reporting': 'The work, milestones, and reporting schedule, shaped around your grant priorities.',
      'Public access to findings':
        'Which findings or materials could be shared publicly and how they could reach the people who will use them.',
    },
  },
  company: {
    label: 'Private companies',
    name: 'a private company',
    opportunities: ['applications', 'tools', 'services', 'dialogues', 'outreach'],
    goals: {
      'Applying our expertise': 'A specific need your team could help meet, with its scope and timing.',
      'Cross-sector exchange':
        'Relevant discussions where your team could share practical experience and learn from others.',
      'Recognition for our contribution':
        'How your organization’s specific contribution could be appropriately acknowledged.',
    },
  },
} satisfies Record<
  string,
  { label: string; name: string; opportunities: OpportunityKey[]; goals: Record<string, string> }
>;

export type ProfileKey = keyof typeof profiles;
