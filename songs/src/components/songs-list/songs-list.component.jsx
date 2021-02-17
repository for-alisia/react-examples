/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

/** Redux */
import { selectSong } from '../../actions';

const SongsList = ({ songs, selectSong }) => (
  <div className="ui segment container">
    <h2>Songs</h2>
    <div className="ui divided list">
      {songs.map((song) => (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => selectSong(song)}>
              SELECT
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  songs: state.songs,
});

export default connect(mapStateToProps, { selectSong })(SongsList);
