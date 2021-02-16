/** Libraries */
import React from 'react';

/** Components */
import VideoItem from '../video-item';

/** Styles */
import './video-list.styles.css';

const VideoList = ({ videos, onVideoSelected }) => {
  console.log(videos);
  return (
    <ul className="videos-list">
      {videos.map((video) => (
        <li key={video.id.videoId}>
          <VideoItem video={video} onVideoSelected={onVideoSelected} />
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
