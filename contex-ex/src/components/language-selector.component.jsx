/** Dependencies */
import React from 'react';

/** Context */
import LanguageContext from '../contexts/language.context';

class Languageselector extends React.Component {
  static contextType = LanguageContext;
  render() {
    return (
      <div>
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
      </div>
    );
  }
}

export default Languageselector;
