import ical from 'ical';

const icsUrl =
  'https://www.airbnb.fr/calendar/ical/914966409368076226.ics?s=85d4aecdd0a1a478ffd7bbd93e89844a';

const parseIcs = (icsData) => {
  const events = ical.parseICS(icsData);
  return Object.values(events).filter((event) => event.type === 'VEVENT');
};

export async function GET(request) {
  try {
    console.log('Fetching ICS data from URL:', icsUrl); // Debug log
    const response = await fetch(icsUrl);

    if (!response.ok) {
      console.error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
      return new Response(
        JSON.stringify({ error: 'Failed to fetch ICS data' }),
        { status: response.status }
      );
    }

    const icsData = await response.text();
    console.log('Fetched ICS data:', icsData); // Debug log

    const events = parseIcs(icsData);
    console.log('Parsed events:', events); // Debug log

    return new Response(JSON.stringify(events), { status: 200 });
  } catch (error) {
    console.error('Error fetching ICS data:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch ICS data' }), {
      status: 500,
    });
  }
}
