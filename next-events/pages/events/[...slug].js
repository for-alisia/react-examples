/** Dependencies */
import { useRouter } from 'next/router';
import Head from 'next/head';
/** Utils */
import { getFilteredEvents } from '../../helpers/api-util';
/** Components */
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/Button';
import ErrorAlert from '../../components/ui/error-alert';

const FilteredEventsPage = ({ hasError, events, errorMessage }) => {
  const {
    query: { slug },
  } = useRouter();

  return (
    <div>
      <Head>
        <title>
          {slug && slug[1]}/{slug && slug[0]}: {events ? events.length : 'No'} event(s) found
        </title>
      </Head>
      {hasError ? (
        <>
          <ErrorAlert>
            <p className="center">{errorMessage}</p>
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

export async function getServerSideProps(context) {
  const {
    params: { slug },
  } = context;

  const [year, month] = slug;

  if (isNaN(+year) || isNaN(+month) || +month < 1 || +month > 12) {
    return {
      props: { hasError: true, errorMessage: 'Invalid filters' },
    };
  }

  const events = await getFilteredEvents({ year: +year, month: +month });

  if (!events || events.length === 0) {
    return {
      props: { hasError: true, errorMessage: 'No events found' },
    };
  }

  return {
    props: {
      events,
    },
  };
}

export default FilteredEventsPage;
