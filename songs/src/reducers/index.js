/** Libraries */
import { combineReducers } from 'redux';

export const songsListReducer = () => {
  return [
    { title: 'No scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '3:44' },
    { title: 'All star', duration: '1.42' },
    { title: 'I want it That way', duration: '2:27' },
  ];
};

export const songSelectedReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case 'SONG_SELECTED':
      return action.payload;
    default:
      return selectedSong;
  }
};

export default combineReducers({ songs: songsListReducer, selectedSong: songSelectedReducer });
