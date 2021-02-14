/** Libraries */
import React from 'react';

/** Styles */
import './search-bar.styles.css';

class SearchBar extends React.Component {
  state = {
    term: '',
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearchSubmit(this.state.term);
  };

  render() {
    const { term } = this.state;
    return (
      <form className="ui form" onSubmit={this.onFormSubmit}>
        <div className="ui action input fluid">
          <input
            type="text"
            placeholder="Search..."
            id="search"
            value={term}
            onChange={(e) => this.setState({ term: e.target.value })}
          />
          <button type="submit" className="ui button">
            SEARCH
          </button>
        </div>
      </form>
    );
  }
}

export default SearchBar;
