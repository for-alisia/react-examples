import Link from 'next/link';

const EventCard = ({ item: { title, image, date, location, id } }) => {
  return (
    <>
      <img src={'/' + image} alt={title} />
      <div>
        <div>
          <h2>{title}</h2>
          <div>
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
          <div>
            <address>{location.replace(', ', '\n')}</address>
          </div>
        </div>
        <div>
          <Link href={`/events/${id}`}>Explore Event</Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
