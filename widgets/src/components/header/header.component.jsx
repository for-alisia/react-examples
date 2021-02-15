/**  Libraries */
import React from 'react';

/** Components */
import Link from '../link/link.component';

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Accordion
      </Link>
      <Link to="/list" className="item">
        Search
      </Link>
      <Link to="/dropdown" className="item">
        Dropdown
      </Link>
      <Link to="/translator" className="item">
        Translate
      </Link>
    </div>
  );
};

export default Header;
