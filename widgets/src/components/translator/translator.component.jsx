/** Libraries */
import React, { useState } from 'react';

/** Components */
import Dropdown from '../dropdown/dropdowm.component';

/** Data */
import { languages } from '../../data';

/** Components */
import Convert from './convert.component';

/** Styles */
import './translator.styles.css';

const Translator = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [text, setText] = useState('');

  const onInputChange = (e) => setText(e.target.value);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={onInputChange} placeholder="Type to translate..." />
        </div>
      </div>

      <Dropdown
        options={languages}
        selected={selectedLang}
        onSelectedChanged={setSelectedLang}
        label="Select a language"
      />

      <hr />
      <h3 className="ui header">Output</h3>
      <Convert lang={selectedLang} text={text} />
    </div>
  );
};

export default Translator;
