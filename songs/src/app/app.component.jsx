/** Libraries */
import React from 'react';

/** Components */
import SongsList from '../components/songs-list/songs-list.component';
import SongDetail from '../components/song-detail/song-detail.component';

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: '40px' }}>
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
