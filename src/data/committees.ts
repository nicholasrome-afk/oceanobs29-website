// Committee membership, as signed off in committees-review.md (2026-10-18).
// Co-chairs first, then members by surname. The ECOP Committee is not
// listed: its members haven't been announced yet.
//
// `photo` is optional: cards show initials until a photo with the person's
// permission is added in src/assets/images/people/ as `<prefix>-<name-slug>.jpg`.
//
// Program Committee (pc-*.jpg) and International Advisory Committee (iac-*.jpg)
// photos: cropped from the previous OceanObs’29 website's committee graphics,
// about 270–330px square. Permission to republish them
// was confirmed by the project lead on 2026-11-20. Benjamin Van Mooy and Dina
// Eparkhina joined later: their photos come from slide 5 of the project's
// "20260817_OceanObs29_General" deck, which the project lead says they approved
// for this use (2026-11-21).
import type { ImageMetadata } from 'astro';

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/images/people/*.jpg', { eager: true });
const slug = (name: string) =>
  name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
/** The photo for a person, if a file `<prefix>-<name-slug>.jpg` exists. */
const photoFor = (prefix: string, name: string) =>
  photos[`../assets/images/people/${prefix}-${slug(name)}.jpg`]?.default;

export interface Person {
  name: string;
  affiliation: string;
  country?: string;
  role?: string;
  /** Override when automatic initials are wrong (surname particles such as Le, Van). */
  initials?: string;
  photo?: ImageMetadata;
}

export const ADVISORY_COMMITTEE: Person[] = [
  {
    name: 'Lixin Wu',
    role: 'Co-Chair',
    affiliation: 'Qingdao National Laboratory of Marine Science and Technology',
    country: 'China',
  },
  {
    name: 'Margaret Leinen',
    role: 'Co-Chair',
    affiliation: 'Scripps Institution of Oceanography, UC San Diego',
    country: 'USA',
  },
  {
    name: 'Ibukun Adewumi',
    affiliation: 'UNESCO-IOC Sub-Commission for Africa and the Adjacent Island States (IOCAFRICA)',
    country: 'Kenya',
  },
  { name: 'Minhan Dai', affiliation: 'Fujian-OI / XMU', country: 'China' },
  {
    name: 'Jean-Pierre Gattuso',
    affiliation: 'French National Centre for Scientific Research (CNRS)',
    country: 'France',
  },
  { name: 'Michelle Heupel', affiliation: 'Integrated Marine Observing System (IMOS)', country: 'Australia' },
  { name: 'Jan Newton', affiliation: 'University of Washington', country: 'USA' },
  { name: 'Nadia Pinardi', affiliation: 'University of Bologna', country: 'Italy' },
  { name: 'Kilaparti Ramakrishna', affiliation: 'Woods Hole Oceanographic Institution', country: 'USA' },
  { name: 'Paul Seaton', affiliation: 'Fugro', country: 'Australia' },
  { name: 'John Siddorn', affiliation: 'National Oceanography Centre', country: 'UK' },
  { name: 'Jyotika Virmani', affiliation: 'Schmidt Ocean Institute', country: 'USA' },
].map((person) => ({ ...person, photo: photoFor('iac', person.name) }));

export const PROGRAM_COMMITTEE: Person[] = [
  { name: 'Fei Chai', role: 'Co-Chair', affiliation: 'Fujian-OI / XMU', country: 'China' },
  { name: 'Joanna Post', role: 'Co-Chair', affiliation: 'Global Ocean Observing System (GOOS)', country: 'France' },
  { name: 'Clarissa Anderson', affiliation: 'Scripps Institution of Oceanography, UC San Diego', country: 'USA' },
  { name: 'Sonia Batten', affiliation: 'North Pacific Marine Science Organization (PICES)', country: 'Canada' },
  { name: 'Louise Biddle', affiliation: 'Voice of the Ocean Foundation', country: 'Sweden' },
  {
    name: 'Lijing Cheng',
    affiliation: 'Institute of Atmospheric Physics, Chinese Academy of Sciences',
    country: 'China',
  },
  { name: 'Dina Eparkhina', affiliation: 'EuroGOOS', country: 'Belgium' },
  {
    name: 'Yosuke Fujii',
    affiliation: 'Japan Meteorological Agency Meteorological Research Institute (JMA/MRI)',
    country: 'Japan',
  },
  {
    name: 'Juliet Hermes',
    affiliation: 'South African Environmental Observation Network (SAEON)',
    country: 'South Africa',
  },
  { name: 'Nathalie Hilmi', affiliation: 'Centre Scientifique de Monaco', country: 'Monaco' },
  { name: 'Pierre-Yves Le Traon', initials: 'PL', affiliation: 'Mercator Ocean International', country: 'France' },
  { name: 'May-Ann Lim', affiliation: 'Access Partnership', country: 'Malaysia' },
  {
    name: 'Deanesh Ramsewak',
    affiliation: 'The University of Trinidad and Tobago',
    country: 'Trinidad and Tobago',
  },
  {
    name: 'Nelly Florida Riama',
    affiliation: 'Indonesian Agency for Meteorology, Climatology and Geophysics (BMKG)',
    country: 'Indonesia',
  },
  { name: 'Pieter Romer', affiliation: 'Ocean Networks Canada, University of Victoria', country: 'Canada' },
  { name: 'Eric Siegel', affiliation: 'Laridae Consulting' },
  { name: 'Toste Tanhua', affiliation: 'GEOMAR Helmholtz Centre for Ocean Research Kiel', country: 'Germany' },
  { name: 'Janice Trotte-Duha', affiliation: 'National Institute for Ocean Research (INPO)', country: 'Brazil' },
  { name: 'Benjamin Van Mooy', initials: 'BV', affiliation: 'Woods Hole Oceanographic Institution', country: 'USA' },
  {
    name: 'Yuntao Wang',
    affiliation: 'Second Institute of Oceanography, Ministry of Natural Resources',
    country: 'China',
  },
  { name: 'Meixun Zhao', affiliation: 'Laoshan Laboratory', country: 'China' },
].map((person) => ({ ...person, photo: photoFor('pc', person.name) }));

/** Named on the old site's FAQ. */
export const COORDINATION_TEAM = ['Fei Chai', 'Samuel Wang', 'Nick Rome'];
