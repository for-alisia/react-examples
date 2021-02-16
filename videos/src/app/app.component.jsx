// @ts-nocheck
/** Libraries */
import React, { useState, useEffect } from 'react';

/** Components */
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import VideoList from '../components/video-list';
import Header from '../components/header';

/** Utils */
import youtube from '../api/youtube';

/** Styles */
import './app.styles.css';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onSearchSubmit = async (term) => {
    try {
      const res = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      setVideos(res.data.items);
      setSelectedVideo(null);
    } catch (err) {
      console.log(err);
    }
  };

  const onVideoSelected = (videoId) => {
    setSelectedVideo(videos.find((video) => video.id.videoId === videoId));
  };

  return (
    <main className="ui container segment">
      <Header />
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className="app-content">
        {selectedVideo ? <VideoDetail video={selectedVideo} /> : ''}

        {videos.length !== 0 ? (
          <div className="app-video-list">
            <VideoList videos={videos} onVideoSelected={onVideoSelected} />
          </div>
        ) : (
          ''
        )}
      </div>
    </main>
  );
};

export default App;
