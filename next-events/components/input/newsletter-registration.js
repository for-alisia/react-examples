// @ts-nocheck
/** Dependencies */
import { useRef, useContext } from 'react';

/** Context */
import NotificationContext from '../../store/notification-context';

/** Styles */
import classes from './newsletter-registration.module.css';

function NewsletterRegistration() {
  const emailRef = useRef();
  const { showNotification } = useContext(NotificationContext);

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
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || 'Something went wrong');
        });
      })
      .then((data) => {
        showNotification({
          title: 'Newsletter Registration',
          message: `Email ${email} were successfully added`,
          status: 'success',
        });
      })
      .catch((err) => {
        showNotification({
          title: 'Newletter Registration',
          message: err.message || 'Something went wrong',
          status: 'error',
        });
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
