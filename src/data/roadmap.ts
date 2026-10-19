// Roadmap to OceanObs’29, from the Program Committee's "Planning update" deck
// (20261011_OceanObs29_General.pptx, slide 7). Used by the homepage timeline
// and the News & Events page. Mark items done as they happen.

export interface Milestone {
  /** Shown as written: "Feb", "Early", "H1", "Apr 7–9". */
  when: string;
  text: string;
  done: boolean;
}

export const ROADMAP: { year: string; items: Milestone[] }[] = [
  {
    year: '2026',
    items: [
      {
        when: 'Feb',
        text: 'OSM26, Glasgow: OceanObs’29 town hall; Program Committee members meet in person',
        done: true,
      },
      { when: 'Mar', text: 'Program Committee kick-off (virtual)', done: true },
      { when: 'Apr', text: 'International Advisory Committee kick-off (virtual)', done: true },
      { when: 'May', text: 'Hong Kong: first Program Committee meeting; six working groups launched', done: true },
      { when: 'Jul', text: 'Program Committee meeting: draft Terms of Reference and working group plans', done: true },
      { when: 'Aug', text: 'ECOP Committee established', done: true },
      { when: 'Dec', text: 'ECOP strategy meeting, Xiamen (proposed)', done: false },
    ],
  },
  {
    year: '2027',
    items: [
      { when: 'Early', text: 'Sponsors Committee formalized', done: false },
      { when: 'Early', text: 'Topical paper abstract call opens (dates to be confirmed)', done: false },
      {
        when: 'Apr 7–9',
        text: 'UN Ocean Decade Conference, Rio de Janeiro: engagement opportunity',
        done: false,
      },
      { when: 'H2', text: 'Second Program Committee meeting, Europe or North America', done: false },
    ],
  },
  {
    year: '2028',
    items: [
      { when: 'H1', text: 'Third Program Committee meeting, Africa or South America', done: false },
      {
        when: 'H1',
        text: 'Local Organizing Committee formalized, with a professional conference organizer',
        done: false,
      },
      { when: 'Aug', text: 'UN Ocean Conference, South Korea: OceanObs’29 side event', done: false },
      { when: 'Late', text: 'Topical and community paper drafting complete', done: false },
    ],
  },
  {
    year: '2029',
    items: [
      { when: 'H1', text: 'Fourth Program Committee meeting and site visits, Qingdao', done: false },
      { when: 'Oct', text: 'OceanObs’29 Conference, Qingdao, China', done: false },
      { when: 'After', text: 'Policy briefs and synthesis papers', done: false },
    ],
  },
];
