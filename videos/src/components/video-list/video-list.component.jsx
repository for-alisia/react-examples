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
      {videos.map(({ id: { videoId }, snippet }) => (
        <li key={videoId}>
          <VideoItem video={snippet} onVideoSelected={onVideoSelected} videoId={videoId} />
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
