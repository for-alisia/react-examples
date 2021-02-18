/** Libraries */
import { combineReducers } from 'redux';

/** Reducers */
import postsReducer from './posts.reducer';
import usersReducer from './users.reducer';

export default combineReducers({ posts: postsReducer, users: usersReducer });
