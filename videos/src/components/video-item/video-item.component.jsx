/** Libraries */
import React from 'react';

/** Styles */
import './video-item.styles.css';

const VideoItem = ({ video, onVideoSelected }) => (
  <div className="video-item" onClick={() => onVideoSelected(video)}>
    <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="ui image" />
    <div className="video-content">
      <h3 className="video-header">{video.snippet.title}</h3>
      <p className="video-description ui blue header">{video.snippet.channelTitle}</p>
    </div>
  </div>
);

export default VideoItem;
