/** Libraries */
import React from 'react';

/** Styles */
import './video-item.styles.css';

const VideoItem = ({ video, onVideoSelected, videoId }) => (
  <div className="video-item" onClick={() => onVideoSelected(videoId)}>
    <img src={video.thumbnails.medium.url} alt={video.title} className="ui image" />
    <div className="video-content">
      <h3 className="video-header">{video.title}</h3>
      <p className="video-description ui blue header">{video.channelTitle}</p>
    </div>
  </div>
);

export default VideoItem;
