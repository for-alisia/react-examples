import { getAllEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/events-search';
import { useRouter } from 'next/router';

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();
  const searchHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <div>
      <EventSearch onSearch={searchHandler} />
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
