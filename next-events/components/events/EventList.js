import EventCard from './EventCard';

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <EventCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
