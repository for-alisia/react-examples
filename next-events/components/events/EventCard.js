/** Dependencies */
import Image from 'next/image';
/** Components */
import Button from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
// @ts-ignore
import classes from './EventCard.module.css';

const EventCard = ({ item: { title, image, date, location, id } }) => {
  return (
    <div className={classes.item}>
      <Image src={'/' + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>
              {new Date(date).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{location.replace(', ', '\n')}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={`/events/${id}`}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
