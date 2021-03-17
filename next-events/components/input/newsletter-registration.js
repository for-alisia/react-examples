// @ts-nocheck
import { useRef, useContext } from 'react';
import classes from './newsletter-registration.module.css';
import NotificationContext from '../../store/notification-context';

function NewsletterRegistration() {
  const emailRef = useRef();
  const { showNotification, hideNotification } = useContext(NotificationContext);

  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    showNotification({
      title: 'Newsletter registration',
      message: 'Sending data',
      status: 'pending',
    });

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        showNotification({
          title: 'Newsletter Registration',
          message: `Email ${email} were successfully added`,
          status: 'success',
        });
        setTimeout(() => {
          hideNotification();
        }, 2000);
      })
      .catch((err) => {
        showNotification({
          title: 'Newletter Registration',
          message: err.message,
          status: 'error',
        });
        setTimeout(() => {
          hideNotification();
        }, 2000);
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
