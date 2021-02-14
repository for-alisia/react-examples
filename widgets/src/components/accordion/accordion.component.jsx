/** Libraries */
import React, { useState } from 'react';

/** Styles */
import './accordion.styles.css';

const Accordion = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  const onTitleClicked = (idx) => {
    activeIdx === idx ? setActiveIdx(null) : setActiveIdx(idx);
  };

  return (
    <div className="ui styled accordion">
      {items.map((item, idx) => {
        const active = activeIdx === idx ? 'active' : '';
        return (
          <React.Fragment key={item.title}>
            <div className={`title ${active}`} onClick={() => onTitleClicked(idx)}>
              <i className="icon dropdown"></i>
              {item.title}
            </div>
            <div className={`content ${active}`}>
              <p>{item.content}</p>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Accordion;
