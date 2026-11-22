// Selected planning updates for News & Events (#milestones): completed, public milestones only.
// Trimmed 2026-11-22 per the website update brief: internal meeting schedules, draft publication
// dates, pending committee dates and proposed outcomes were removed; the Rio conference moved to the
// shared event data (src/data/events). The ECOP workshop in Xiamen (Dec 2026) is left out until the
// organizers confirm a public listing. Sources: Planning update deck (Oct 2026, slide 7) and the
// ECOP Committee minutes (29 Oct 2026). Add new entries only once they have happened and are public.

export interface PlanningUpdate {
  /** Shown as written, e.g. "May 2026". */
  when: string;
  text: string;
  /** Optional link to more on this site. */
  link?: { text: string; href: string };
}

export const PLANNING_UPDATES: PlanningUpdate[] = [
  {
    when: 'Mar–Apr 2026',
    text: 'The Program Committee and International Advisory Committee began their work.',
    link: { text: 'Committee members', href: '/about#program-committee' },
  },
  {
    when: 'May 2026',
    text: 'The Program Committee held its first assembly, in Hong Kong.',
  },
  {
    when: 'Aug 2026',
    text: 'The Early Career Ocean Professionals Committee was established.',
    link: { text: 'How OceanObs’29 is organized', href: '/about#governance' },
  },
];
