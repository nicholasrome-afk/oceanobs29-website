import { getPermalink, getBlogPermalink } from './utils/permalinks';

// SETUP: match the site's sections. The newsletter lives in the utility bar
// (src/components/site/UtilityBar.astro), so the main menu has no button.
export const headerData = {
  links: [
    { text: 'About', href: getPermalink('/about') },
    { text: 'Events', href: getPermalink('/events') },
    { text: 'News', href: getBlogPermalink() },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [],
};

export const footerData = {
  // Quick anchor links to the homepage sections (MBARI-style footer).
  homeSections: [
    { text: 'What we do', href: getPermalink('/#about') },
    { text: 'Partners & programmes', href: getPermalink('/#network') },
    { text: 'Events', href: getPermalink('/#events') },
    { text: 'Latest updates', href: getPermalink('/#updates') },
  ],
  sections: [
    {
      title: 'On this site',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Events', href: getPermalink('/events') },
        { text: 'News', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
};
