/** Libraries */
import React from 'react';

/** Components */
import SearchBar from '../components/search-bar';
import ImageList from '../components/image-list';

/** Utils */
import unsplash from '../api/unsplash';

class App extends React.Component {
  state = {
    images: [],
    term: '',
  };

  onSearchSubmit = async (term) => {
    try {
      const res = await unsplash.get('/search/photos', {
        params: { query: term, per_page: 30 },
      });
      this.setState({ images: res.data.results });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '20px' }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
