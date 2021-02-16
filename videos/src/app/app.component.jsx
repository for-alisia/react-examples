/** Libraries */
import React, { useState, useEffect } from 'react';

/** Components */
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import VideoList from '../components/video-list';
import Header from '../components/header';

/** Hooks */
import useVideos from '../hooks/useVideos';

/** Styles */
import './app.styles.css';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('nature');

  useEffect(() => setSelectedVideo(videos[0]), [videos]);

  return (
    <main className="ui container segment">
      <Header />
      <SearchBar onSearchSubmit={search} />
      <div className="app-content">
        {selectedVideo ? <VideoDetail video={selectedVideo} /> : ''}

        {videos.length !== 0 ? (
          <div className="app-video-list">
            <VideoList videos={videos} onVideoSelected={setSelectedVideo} />
          </div>
        ) : (
          ''
        )}
      </div>
    </main>
  );
};

export default App;
