// @ts-nocheck
/** Dependencies */
import { useContext } from 'react';
/** Styles */
import classes from './notification.module.css';
/** Context */
import NotificationContext from '../../store/notification-context';

function Notification({ title, message, status }) {
  const { hideNotification } = useContext(NotificationContext);

  let statusClasses = '';

  switch (status) {
    case 'success':
      statusClasses = classes.success;
      break;
    case 'error':
      statusClasses = classes.error;
      break;
    default:
      statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={hideNotification}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
