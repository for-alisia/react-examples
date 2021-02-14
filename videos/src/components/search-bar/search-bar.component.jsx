/** Libraries */
import React from 'react';

/** Styles */
import './search-bar.styles.css';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui fluid action input">
            <input type="text" placeholder="Search..." value={term} onChange={this.onInputChange} />
            <button className="ui button" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
