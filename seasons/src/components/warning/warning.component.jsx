/** Libraries */
import React from 'react';

/** Styles */
import './warning.styles.css';

const Warning = ({ children = 'Some error occured. Please try again.' }) => {
  return (
    <div className="warning-message">
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="exclamation triangle icon"></i>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Warning;
