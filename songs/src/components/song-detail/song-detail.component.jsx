/** Libraries */
import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => (
  <div>
    <div>
      {selectedSong ? (
        <div className="ui card">
          <div className="content">
            <h3 className="header">Details for:</h3>
          </div>
          <div className="content">
            <div className="summary">
              <p>Title: {selectedSong.title}</p>
              <p>Duration: {selectedSong.duration}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>Select a song to see details</div>
      )}
    </div>
  </div>
);

const mapDispatchToProps = ({ selectedSong }) => ({ selectedSong });

export default connect(mapDispatchToProps)(SongDetail);
