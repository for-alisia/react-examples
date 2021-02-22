/** Dependencies */
import React, { useState } from 'react';
/** Icons */
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
/** Data */
import people from './data';

const Review = () => {
  /** Setup */
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  /** Handlers */
  const onPrevPerson = () => {
    index === 0 ? setIndex(people.length - 1) : setIndex((prevIndex) => prevIndex - 1);
  };
  const onNextPerson = () => {
    index === people.length - 1 ? setIndex(0) : setIndex((prevIndex) => prevIndex + 1);
  };
  const onRndPerson = () => {
    setIndex(Math.floor(Math.random() * people.length));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={onPrevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={onNextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={onRndPerson}>
        Suprise me
      </button>
    </article>
  );
};

export default Review;
