/** Libraries */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/** Redux */
import { fetchPostsAndUsers } from '../../actions';

/** Components */
import UserHeader from '../user-header/user-header.component';

const PostsList = ({ fetchPostsAndUsers, posts }) => {
  useEffect(() => {
    fetchPostsAndUsers();
  }, [fetchPostsAndUsers]);

  return (
    <div>
      <div className="ui relaxed divided list">
        {posts.map(({ id, title, body, userId }) => (
          <div className="item" key={id}>
            <i className="large middle aligned icon user" />
            <div className="content">
              <div className="description">
                <h2>{title}</h2>
                <p>{body}</p>
              </div>
              <UserHeader userId={userId} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostsList);
