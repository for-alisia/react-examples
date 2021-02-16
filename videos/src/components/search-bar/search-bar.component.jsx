/** Libraries */
import React, { useState } from 'react';

/** Styles */
import './search-bar.styles.css';

const SearchBar = ({ onSearchSubmit }) => {
  const [term, setTerm] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSearchSubmit(term);
  };

  return (
    <div className="search-bar">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="ui fluid action input">
          <input
            type="text"
            placeholder="Search..."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button className="ui button" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
