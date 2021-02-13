/** Libraries */
import React from 'react';

const Spinner = ({ children = 'Loading...', size = 'big' }) => (
  <div className="ui active dimmer">
    <div className={`ui ${size} text loader`}>{children}</div>
  </div>
);

export default Spinner;
