/** Libraries */
import React, { useState } from 'react';

/** Components */
import Dropdown from '../dropdown/dropdowm.component';

/** Data */
import { languages } from '../../data';

/** Styles */
import './translator.styles.css';

const Translator = () => {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  return (
    <div>
      <Dropdown options={languages} selected={selectedLang} onSelectedChanged={setSelectedLang} />
    </div>
  );
};

export default Translator;
