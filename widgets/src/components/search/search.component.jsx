/** Libraries */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Styles */
import './search.styles.css';

const Search = () => {
  const [inputValue, setInputValue] = useState('javascript');
  const [results, setResults] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await axios(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: inputValue,
          },
        });
        setResults(data.query.search);
      } catch (err) {
        console.log(err);
      }
    };

    if (inputValue) {
      search();
    }
  }, [inputValue]);

  const onInputChanged = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input className="input" value={inputValue} onChange={onInputChanged} />
        </div>
      </div>
      <div className="ui celled list">
        {results.map((result) => (
          <div className="item" key={result.pageid}>
            <div className="content">
              <div className="header">{result.title}</div>
              {result.snippet}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
