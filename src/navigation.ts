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
  // Quick anchor links to the homepage sections.
  homeSections: [
    { text: 'The vision', href: getPermalink('/#vision') },
    { text: 'Shaping the future', href: getPermalink('/#future') },
    { text: 'Get involved', href: getPermalink('/#involved') },
    { text: 'Toward 2029', href: getPermalink('/#timeline') },
  ],
  sections: [
    {
      title: 'On this site',
      links: headerData.links,
    },
  ],
};
