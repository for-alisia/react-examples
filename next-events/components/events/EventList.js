import EventCard from './EventCard';
// @ts-ignore
import classes from './EventList.module.css';

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <li key={item.id}>
          <EventCard item={item} />
        </li>
      ))}
    </ul>
  );
};

export default EventList;
