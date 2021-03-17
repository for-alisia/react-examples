// @ts-nocheck
import { createContext, useState, useEffect } from 'react';

const NotificationContext = createContext({
  notification: null, // { title, message, status }
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function NotificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  function showNotificationHandler({ title, message, status }) {
    setActiveNotification({ title, message, status });
  }

  function hideNotidicationHandler() {
    setActiveNotification(null);
  }

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotidicationHandler,
  };

  useEffect(() => {
    let timer;

    if (activeNotification && activeNotification.status !== 'pending') {
      timer = setTimeout(() => {
        setActiveNotification(null);
      }, 3000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [activeNotification]);

  return (
    <NotificationContext.Provider value={context}>{props.children}</NotificationContext.Provider>
  );
}

export default NotificationContext;
