/** Dependencies */
import Head from 'next/head';
/** Utils */
import { getFeaturedEvents } from '../helpers/api-util';
/** Components */
import EventList from '../components/events/EventList';
import NewsletterRegistration from '../components/input/newsletter-registration';

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Some content here" />
      </Head>
      <NewsletterRegistration />
      <EventList items={featuredEvents} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
