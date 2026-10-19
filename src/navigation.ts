import { getPermalink } from './utils/permalinks';

// Main navigation follows the project brief's site map (docs/PROJECT_BRIEF.md).
export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'The Conference', href: getPermalink('/conference') },
    { text: 'Get Involved', href: getPermalink('/get-involved') },
    { text: 'Publications & Resources', href: getPermalink('/resources') },
    { text: 'News & Events', href: getPermalink('/events') },
    { text: 'Partners', href: getPermalink('/partners') },
  ],
  actions: [],
};

export const footerData = {
  // Homepage-section shortcuts removed after the red-team review (labels didn't match
  // the section headings, and "Get involved" pointed to two different places).
  homeSections: [] as { text: string; href: string }[],
  sections: [
    {
      title: 'On this site',
      links: headerData.links,
    },
  ],
};
