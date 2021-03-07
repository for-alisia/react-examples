import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';

const FilteredEventsPage = () => {
  const {
    query: { slug },
  } = useRouter();

  const events = slug && getFilteredEvents({ year: +slug[0], month: +slug[1] });

  return (
    <div>
      {!events || events.length === 0 ? (
        <>
          <ErrorAlert>
            <p className="center">No events here</p>
          </ErrorAlert>

          <div className="center">
            <Button link="/events">Show all events</Button>
          </div>
        </>
      ) : (
        <>
          <ResultsTitle date={slug && new Date(+slug[0], +slug[1] - 1)} />
          <EventList items={events} />
        </>
      )}
    </div>
  );
};

export default FilteredEventsPage;
