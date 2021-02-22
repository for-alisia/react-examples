/** Dependencies */
import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

const App = () => {
  const [people, _] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    index < 0 && setIndex(lastIndex);
    index > lastIndex && setIndex(0);
  }, [index, people]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map(({ id, name, image, title, quote }, personIdx) => {
          let position = 'nextSlide';
          if (personIdx === index) {
            position = 'activeSlide';
          }
          if (personIdx === index - 1 || (index === 0 && personIdx === people.length - 1)) {
            position = 'lastSlide';
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
