/** Libraries */
import React from 'react';
import axios from 'axios';

/** Components */
import SearchBar from '../components/search-bar';

/** Utils */
import { UNSPLASH_ACCESS_KEY } from '../keys';

class App extends React.Component {
  state = {
    searchResults: [],
    searchValue: '',
  };

  onSearchSubmit = (term) => {
    axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${UNSPLASH_ACCESS_KEY}`,
      },
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
