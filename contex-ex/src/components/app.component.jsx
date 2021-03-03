/** Libraries */
import React from 'react';

/** Components */
import UserCreate from './user-create.component';
import LanguageSelector from './language-selector.component';

/** Context */
import { LanguageStore } from '../contexts/language.context';
import ColorContext from '../contexts/color.context';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <LanguageStore>
            <LanguageSelector />
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>
      </div>
    );
  }
}

export default App;
