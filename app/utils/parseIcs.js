import ical from 'ical';

export const parseIcs = (icsData) => {
  const events = ical.parseICS(icsData);
  return Object.values(events).filter((event) => event.type === 'VEVENT');
};
