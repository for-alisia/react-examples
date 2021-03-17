// @ts-nocheck
/** Dependencies */
import { useState, useEffect, useContext } from 'react';

/** Components */
import CommentList from './comment-list';
import NewComment from './new-comment';

/** Context */
import NotificationContext from '../../store/notification-context';

/** Styles */
import classes from './comments.module.css';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(false);

  const { showNotification } = useContext(NotificationContext);

  useEffect(() => {
    if (showComments) {
      fetchComments();
    }
  }, [showComments]);

  function fetchComments() {
    setLoading(true);
    fetch(`/api/comments/${eventId}`)
      .then((res) => res.json())
      .then(({ comments }) => {
        setComments(comments);
        setLoading(false);
      });
  }

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    showNotification({
      title: 'Comments: pending',
      message: 'Sending a comment...',
      status: 'pending',
    });

    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
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
        showNotification({ title: 'Comments: success', message: data.message, status: 'success' });
        fetchComments();
      })
      .catch((err) =>
        showNotification({ title: 'Comments: error', message: err.message, status: 'error' })
      );
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && (loading ? <p>Loading Comments...</p> : <CommentList items={comments} />)}
    </section>
  );
}

export default Comments;
