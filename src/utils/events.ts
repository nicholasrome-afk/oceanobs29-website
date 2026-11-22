import { getCollection, type CollectionEntry } from 'astro:content';

export type DcoEvent = CollectionEntry<'events'>;

// Event dates are calendar days in the event's own timezone; format them in UTC
// so a 21 Feb event never renders as 20 Feb on a machine west of Greenwich.
const fmt = (opts: Intl.DateTimeFormatOptions) => new Intl.DateTimeFormat('en-GB', { timeZone: 'UTC', ...opts });

const fmtWeekday = fmt({ weekday: 'short' });
const fmtWeekdayLong = fmt({ weekday: 'long' });
const fmtMonth = fmt({ month: 'short' });
const fmtDay = fmt({ day: 'numeric' });
const fmtFull = fmt({ day: 'numeric', month: 'long', year: 'numeric' });

export const dayKey = (d: Date) => d.toISOString().slice(0, 10);
export const weekday = (d: Date) => fmtWeekday.format(d);
export const weekdayLong = (d: Date) => fmtWeekdayLong.format(d);
export const monthShort = (d: Date) => fmtMonth.format(d);
export const dayOfMonth = (d: Date) => fmtDay.format(d);
export const fullDate = (d: Date) => fmtFull.format(d);
/** "Sat 21 Feb" */
export const shortDay = (d: Date) => `${weekday(d)} ${dayOfMonth(d)} ${monthShort(d)}`;

/** Short time-zone name on the event's date, e.g. "GMT", "PST" or "GMT+8", so international readers know the clock. */
const zoneName = (date: Date, timeZone: string) =>
  new Intl.DateTimeFormat('en-US', { timeZone, timeZoneName: 'short' })
    .formatToParts(new Date(date.getTime() + 12 * 3600 * 1000))
    .find((p) => p.type === 'timeZoneName')?.value ?? timeZone;

export const timeRange = ({ startTime, endTime, date, timezone }: DcoEvent['data']) => {
  const range = startTime && endTime ? `${startTime}–${endTime}` : (startTime ?? '');
  return range ? `${range} ${zoneName(date, timezone)}` : '';
};

/** Organizers minus the generic "partners" entry, which is shown as "+ partners". */
export const splitOrganizers = (organizers: string[]) => {
  const named = organizers.filter((o) => o.toLowerCase() !== 'partners');
  return { named, withPartners: named.length !== organizers.length };
};

const byDateTime = (a: DcoEvent, b: DcoEvent) =>
  a.data.date.getTime() - b.data.date.getTime() || (a.data.startTime ?? '').localeCompare(b.data.startTime ?? '');

/** All published events, oldest first. */
export const getEvents = async () =>
  (await getCollection('events', ({ data }) => import.meta.env.DEV || !data.draft)).sort(byDateTime);

/** Offset (ms) of `timeZone` from UTC at the given instant. */
const tzOffset = (instant: number, timeZone: string) => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
      hourCycle: 'h23',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    })
      .formatToParts(new Date(instant))
      .map((p) => [p.type, Number(p.value)])
  );
  return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second) - instant;
};

/**
 * The moment an event ends, in real time: its last day (`endDate` or `date`) at `endTime`
 * (or the end of that day) in the event's own timezone.
 */
export const endsAt = ({ date, endDate, endTime, timezone }: DcoEvent['data']) => {
  const day = endDate ?? date;
  const [h, m] = (endTime ?? '24:00').split(':').map(Number);
  const wall = Date.UTC(day.getUTCFullYear(), day.getUTCMonth(), day.getUTCDate(), h, m);
  return new Date(wall - tzOffset(wall, timezone));
};

/**
 * Upcoming vs past, by when each event ends in its own timezone. This is worked out at build
 * time; the "upcoming" lists also carry `data-ends` so a small script hides an event that has
 * ended since the last build (see EventRow.astro).
 */
export const splitByTime = (events: DcoEvent[], now = new Date()) => ({
  upcoming: events.filter((e) => endsAt(e.data) > now),
  past: events.filter((e) => endsAt(e.data) <= now).reverse(),
});

/** "Thu 10 Dec 2026", or "7–9 Apr 2027" for a multi-day event. */
export const dateLabel = ({ date, endDate }: DcoEvent['data']) => {
  if (!endDate || dayKey(endDate) === dayKey(date))
    return `${weekday(date)} ${dayOfMonth(date)} ${monthShort(date)} ${date.getUTCFullYear()}`;
  const sameMonth = date.getUTCMonth() === endDate.getUTCMonth() && date.getUTCFullYear() === endDate.getUTCFullYear();
  return sameMonth
    ? `${dayOfMonth(date)}–${dayOfMonth(endDate)} ${monthShort(endDate)} ${endDate.getUTCFullYear()}`
    : `${dayOfMonth(date)} ${monthShort(date)}–${dayOfMonth(endDate)} ${monthShort(endDate)} ${endDate.getUTCFullYear()}`;
};

/** Anchor id for an event row on News & Events, e.g. "event-2026-12-10-agu26-town-hall". */
export const eventAnchor = (event: DcoEvent) => `event-${event.id}`;

/** Group events by conference (or "Other events"), keeping date order inside each group. */
export const groupByConference = (events: DcoEvent[]) => {
  const groups = new Map<string, DcoEvent[]>();
  for (const e of events) {
    const key = e.data.conference ?? 'Other events';
    groups.set(key, [...(groups.get(key) ?? []), e]);
  }
  for (const list of groups.values()) list.sort(byDateTime);
  return groups;
};

/** Group a list of events by calendar day, in date order. */
export const groupByDay = (events: DcoEvent[]) => {
  const days = new Map<string, DcoEvent[]>();
  for (const e of [...events].sort(byDateTime)) {
    const key = dayKey(e.data.date);
    days.set(key, [...(days.get(key) ?? []), e]);
  }
  return days;
};
