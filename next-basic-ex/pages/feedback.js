// @ts-nocheck
import { useState } from 'react';
import { feedbackData } from './api/feedback';

const FeedbackPage = ({ feedback }) => {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedback = (id) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then(({ feedback }) => setFeedbackData(feedback));
  };

  return (
    <div>
      <h1>Feedback List</h1>
      <ul>
        {feedback &&
          feedback.map((item) => (
            <li key={item.id}>
              {item.text} <button onClick={() => loadFeedback(item.id)}>Show Details</button>
            </li>
          ))}
      </ul>
      {feedbackData && (
        <>
          <h4>Details</h4>
          <p>{feedbackData.email}</p>
        </>
      )}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = feedbackData();

  return {
    props: { feedback: data },
  };
}

export default FeedbackPage;
