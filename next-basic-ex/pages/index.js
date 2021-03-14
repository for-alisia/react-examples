// @ts-nocheck
import { useRef, useState } from 'react';
import Link from 'next/link';
/** Node imports to pre-render */
import fs from 'fs/promises';
import path from 'path';

const HomePage = ({ products }) => {
  const emailInput = useRef();
  const feedbackInput = useRef();

  const [feedback, setFeedback] = useState();

  const submitFormHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInput.current.value;
    const enteredFeedback = feedbackInput.current.value;

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        text: enteredFeedback,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        loadFeedback();
      });
  };

  const loadFeedback = () => {
    fetch('/api/feedback')
      .then((response) => response.json())
      .then(({ feedback }) => {
        setFeedback(feedback);
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
      <ul>
        {products.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" ref={emailInput} />
        </div>
        <div>
          <label htmlFor="feedback">Feedback</label>
          <textarea rows={5} id="feedback" ref={feedbackInput} />
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <button onClick={loadFeedback}>Load feedback</button>
      {feedback && (
        <ul>
          {feedback.map((item) => (
            <li key={item.id}>
              {item.text} from {item.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Static generation (pre-renders on building a project)
export async function getStaticProps(context) {
  console.log(context);
  const jsonData = await fs.readFile(path.join(process.cwd(), 'data', 'dummy-backend.json'));
  // @ts-ignore
  const data = JSON.parse(jsonData);
  return {
    props: {
      products: data.products,
    },
    // To re-render each 60 seconds (ISR)
    revalidate: 60,
    // If 'true' returns 404
    //notFound: false,
    // Redirect users to another page
    //redirect: {
    //  destination: '/',
    //},
  };
}

export default HomePage;
