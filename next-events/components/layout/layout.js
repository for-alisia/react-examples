// @ts-nocheck
import { useContext } from 'react';
import MainHeader from './main-header';
import Notification from '../notification/notification';
import NotificationContext from '../../store/notification-context';

const Layout = ({ children }) => {
  const { notification } = useContext(NotificationContext);
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      {notification && (
        <Notification
          title={notification.title}
          message={notification.message}
          status={notification.status}
        />
      )}
    </>
  );
};

export default Layout;
