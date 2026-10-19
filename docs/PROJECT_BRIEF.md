# OceanObs'29 website: project brief

Migrating https://www.oceanobs29.net (Squarespace) to this Astro site. The "Direction" and "Site map" sections restate the project lead's own brief (October 2026). "Confirmed facts" lists their answers at the Phase 1 gate.

## Direction

Design OceanObs'29 as a **global initiative that culminates in a major international conference**, not just a conference website. The site has to grow between now and 2029, and serve as a springboard from the end of the UN Ocean Decade in 2030.

Build it in two phases:

- **2026–2027: initiative and engagement portal.** Vision, global planning process, community participation, workshops, publications, fundraising.
- **2028–2029: full conference website.** Add the program, registration, speakers, exhibitions, sponsorship, logistics and participant resources to the same structure.

Don't build conference features (registration, speakers, exhibitions) before they're needed.

Over time the site should support: the vision for ocean observing; community engagement, working groups and planning; conference programming, registration and participant information; publications, white papers and contributions; sponsorship and institutional partnerships; news, announcements and event archives.

## Design references

See `~/Documents/Work/OceanObs'29/reference/README.md` (outside the repo):

- **OceanX:** aesthetic. Ocean photography, expansive imagery, dramatic headlines, contemporary type, restrained palette.
- **Falling Walls:** structure for a sophisticated international scientific conference (programs, participants, partners, related activities).
- **Slush:** engagement and partnerships. Prominent calls to action, audience-specific content, polished sponsor presentation.

## Site map (main navigation)

| Section                  | Content                                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------------------- |
| About                    | Vision, objectives, history, decadal legacy, organizing committees                                   |
| The Conference           | Qingdao 2029, themes, program, venue, registration, travel                                           |
| Get Involved             | Community engagement, working groups, workshops, calls for contributions, early career opportunities |
| Publications & Resources | White papers, reports, conference outcomes, historical archives                                      |
| News & Events            | Announcements, planning milestones, workshops, upcoming events                                       |
| Partners                 | Institutional partners, sponsors, funding opportunities, partnership information                     |

Two prominent calls to action in the homepage header: **Get Involved** and **Become a Partner**.

## Homepage sequence

1. **Hero:** full-width ocean imagery or video, bold OceanObs'29 headline, Qingdao 2029
2. **The Vision:** why the next decade of ocean observing matters
3. **Shaping the Future:** 3–4 visual cards (scientific priorities, innovation, global participation, societal needs)
4. **Get Involved:** featured ways to contribute to the planning process
5. **Latest Developments:** cards for news, workshops, publications, milestones
6. **Toward 2029:** timeline of planning stages and upcoming activities
7. **Partners:** institutional logos and a featured partnership opportunity
8. **Stay Connected:** newsletter signup and contact

## Confirmed facts (Phase 1 gate, 2026-10-18)

- **Name:** OceanObs'29. The conference is in **Qingdao, China, in 2029**. Exact dates come after the Local Organizing Committee forms, expected in 2027 (from the old site's FAQ).
- **No organizer or host organization** to name. Leave `ORG.status` empty, and don't credit a host anywhere.
- **Program Committee co-chairs:** Fei Chai and Joanna Post.
- **International Advisory Committee co-chairs:** Lixin Wu and Margaret Leinen.
- **Committee membership:** the old site's screenshots are out of date. The final IAC (12) and Program Committee (21) lists are under "Resolved lists" in `~/Documents/Work/OceanObs'29/committees-review.md` (kept outside this public repo). Samuel Wang is on the Coordination Team, not the PC. **The ECOP Committee is on hold: don't publish its members.**
- **Headshots:** the user wants photos on committee cards. The source and permission for each photo still need settling (see open items).
- **Sponsors/partners:** none can be named yet. Partners pages show the opportunity ("Become a Partner"), not logos.
- **Contact:** info@oceanobs29.net. The coordination team named on the old site: Fei Chai, Samuel Wang, Nick Rome.
- **Decisions:** English only; 1–2 editors after launch (Keystatic or Pages CMS); move only DNS to Cloudflare at launch.

## Open items

- The old `/home` page is a leftover "Romeocean" template page, live and in the sitemap. Unpublish it in Squarespace; redirect `/home` to `/`.
- The LinkedIn link is `linkedin.com/in/oceanobs29` (a personal-profile address). Confirm it's correct.
- Newsletter: no provider exists yet. The "Stay Connected" signup needs a decision.
- Logo: only PNGs exist (wordmark about 1,260 px; circle 200 px). Ask the designer for SVGs.
- Imagery: there are no usable real photos. Source licensed or public-domain ocean photography, with credits recorded.

## Old URL → new URL (redirects)

| Old                               | New                                      |
| --------------------------------- | ---------------------------------------- |
| `/home`                           | `/`                                      |
| `/oceanobs29`                     | `/` (duplicate of the homepage)          |
| `/ad-hoc-committee-1-2` (Process) | About → governance                       |
| `/oceanobs29-organization`        | About → governance                       |
| `/ad-hoc-committee-1`             | About → International Advisory Committee |
| `/ad-hoc-committee-1-1`           | About → Program Committee                |
