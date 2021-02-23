// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    setLoading(true);
    let url;

    query
      ? (url = `${searchUrl}${clientID}&query=${query}&page=${page}`)
      : (url = `${mainUrl}${clientID}&page=${page}`);

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (query && page === 1) {
        setPhotos(data.results);
      } else if (query && page !== 1) {
        setPhotos((photos) => [...photos, ...data.results]);
      } else {
        setPhotos((photos) => [...photos, ...data]);
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(page);
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener('scroll', () => {
      if (!loading && window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        setPage((page) => page + 1);
      }
    });

    return () => window.removeEventListener('scroll', event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    page === 1 ? fetchImages() : setPage(1);
  };
  return (
    <main>
      <section className="search">
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="search"
            className="form-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo) => (
            <Photo key={photo.id} {...photo} />
          ))}
        </div>
        {loading ? <h2 className="loading">Loading...</h2> : ''}
      </section>
    </main>
  );
}

export default App;
