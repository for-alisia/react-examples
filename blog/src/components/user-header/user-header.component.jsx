/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

const UserHeader = ({ user }) => {
  return <div className="header">{user ? user.name : ''}</div>;
};

const mapStateToProps = ({ users }, { userId }) => ({
  user: users.find(({ id }) => id === userId),
});

export default connect(mapStateToProps)(UserHeader);
