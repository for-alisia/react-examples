// @ts-nocheck
/** Libraries */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

/** Styles */
import './search.styles.css';

const Search = () => {
  const [inputValue, setInputValue] = useState('programming');
  const [debouncedTerm, setDebouncedTerm] = useState(inputValue);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(inputValue);
    }, 1000);

    return () => clearTimeout(timerId);
  }, [inputValue]);

  useEffect(() => {
    const search = async () => {
      try {
        const { data } = await axios(`https://en.wikipedia.org/w/api.php`, {
          params: {
            action: 'query',
            list: 'search',
            origin: '*',
            format: 'json',
            srsearch: debouncedTerm,
          },
        });
        setResults(data.query.search);
      } catch (err) {
        console.log(err);
      }
    };
    search();
  }, [debouncedTerm]);

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
            <div className="right floated content">
              <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
                Go
              </a>
            </div>
            <div className="content">
              <div className="header">{result.title}</div>
              <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
