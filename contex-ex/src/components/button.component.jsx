/** Dependencies */
import React from 'react';
/** Context */
import LanguageContext from '../contexts/language.context';
import ColorContext from '../contexts/color.context';

class Button extends React.Component {
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({
                // @ts-ignore
                language,
              }) => (language === 'english' ? 'Submit' : 'Voorleggen')}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
