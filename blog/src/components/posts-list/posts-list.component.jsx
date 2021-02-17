/** Libraries */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

/** Redux */
import { fetchPosts } from '../../actions';

const PostsList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <div>
        {posts.map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts }) => ({ posts });

export default connect(mapStateToProps, { fetchPosts })(PostsList);
