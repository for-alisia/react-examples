/** Libraries */
import React, { useState } from 'react';

/** Components */
import Accordion from '../components/accordion/accordion.component';
import Search from '../components/search/search.component';
import Dropdown from '../components/dropdown/dropdowm.component';

/** Data */
import { accItems as items, dropdownOptions } from '../data';

/** Styles */
import './app.styles.css';

const App = () => {
  const [selected, setSelected] = useState(dropdownOptions[0]);

  return (
    <div className="ui container">
      <h1>Widgets</h1>
      <div className="ui segment">
        <h3>Dropdown</h3>
        <Dropdown options={dropdownOptions} selected={selected} onSelectedChanged={setSelected} />
      </div>
      <div className="ui segment">
        <h3>Accordion</h3>
        <Accordion items={items} />
      </div>
      <div className="ui segment">
        <h3>Wikipedia Search</h3>
        <Search />
      </div>
    </div>
  );
};

export default App;
