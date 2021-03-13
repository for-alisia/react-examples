/** Dependencies */
import Head from 'next/head';
/** Utils */
import { getAllEvents } from '../../helpers/api-util';
/** Components */
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

const EventsPage = ({ events }) => {
  const router = useRouter();
  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <Head>
        <title>All events</title>
      </Head>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
};

export async function getStaticProps() {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
