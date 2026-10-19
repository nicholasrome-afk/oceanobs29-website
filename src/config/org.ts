// Single source of truth for how the organization describes itself.
// Every page, the header, the footer and the structured data read from here,
// so a change to the name, host, status wording or contacts happens only here.
//
// SETUP: replace every TODO value. Leave optional fields empty ('' / []) to
// hide the parts of the site that use them.
import type { ImageMetadata } from 'astro';

export interface FooterLogo {
  /** Small label above the logo, e.g. "Hosted by", "Part of", "In collaboration with". */
  label: string;
  src: ImageMetadata;
  alt: string;
  href: string;
}

export const ORG = {
  /** Full name, exactly as the organization writes it. */
  name: 'OceanObs’29',
  /** Short name / acronym used in the wordmark and page titles. */
  shortName: 'OceanObs’29',
  /** Optional host or parent institution (shown in the utility bar and footer). */
  host: { name: '', url: '' },
  /**
   * One-line status statement for the footer, e.g. "… is hosted by …" or
   * "… is in Special Consultative Status with ECOSOC". It must be exactly
   * right: this is the only place the wording lives.
   */
  status: '',
  /** Newsletter signup page (Mailchimp, Buttondown…). '' hides the newsletter band and button. */
  newsletterUrl: '',
  /** Links on the right of the utility bar, besides the newsletter button. */
  utilityLinks: [] as { text: string; href: string }[],
  /** People listed in the footer (and on the Contact page). */
  contacts: [] as { name: string; role?: string; email: string }[],
  /** Heading above the contacts in the footer, e.g. "Secretariat". */
  contactsHeading: 'Contact',
  /** Logos for the light strip above the footer. Import images from ~/assets/images/site/. */
  footerLogos: [] as FooterLogo[],
  /** Optional bottom-right footer line, e.g. "Contributing to the UN Decade of …". */
  footerNote: { text: '', href: '' },
};
