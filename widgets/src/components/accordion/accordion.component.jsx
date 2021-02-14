/** Libraries */
import React from 'react';

/** Styles */
import './accordion.styles.css';

const Accordion = ({ items }) => {
  return (
    <div className="ui styled accordion">
      {items.map((item) => (
        <div key={item.title}>
          <div className="title active">
            <i className="dropdown icon"></i>
            {item.title}
          </div>
          <div className="content active">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
