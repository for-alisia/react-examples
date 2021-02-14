/** Libraries */
import React from 'react';

/** Components */
import SearchBar from '../components/search-bar';
import VideoDetail from '../components/video-detail';
import VideoList from '../components/video-list';
import Header from '../components/header';

/** Utils */
import youtube from '../api/youtube';

/** Styles */
import './app.styles.css';

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  onSearchSubmit = async (term) => {
    try {
      const res = await youtube.get('/search', {
        params: {
          q: term,
        },
      });
      this.setState({ videos: res.data.items });
    } catch (err) {
      console.log(err);
    }
  };

  onVideoSelected = (videoId) => {
    this.setState({
      selectedVideo: this.state.videos.find((video) => video.id.videoId === videoId),
    });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <main className="ui container segment">
        <Header />
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="app-content">
          {selectedVideo ? <VideoDetail video={selectedVideo} /> : ''}
          <VideoList videos={videos} onVideoSelected={this.onVideoSelected} />
        </div>
      </main>
    );
  }
}

export default App;
