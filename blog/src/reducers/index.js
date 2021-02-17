/** Libraries */
import { combineReducers } from 'redux';

/** Reducers */
import postsReducer from './posts.reducer';

export default combineReducers({ posts: postsReducer });
