/** Libraries */
import React, { useState } from 'react';

/** Router */
import Route from '../components/route/route.component';

/** Components */
import Header from '../components/header/header.component';
import Accordion from '../components/accordion/accordion.component';
import Search from '../components/search/search.component';
import Dropdown from '../components/dropdown/dropdowm.component';
import Translator from '../components/translator/translator.component';

/** Data */
import { accItems as items, dropdownOptions } from '../data';

/** Styles */
import './app.styles.css';

const App = () => {
  const [selected, setSelected] = useState(dropdownOptions[0]);

  return (
    <div className="ui container">
      <h1>Widgets</h1>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={dropdownOptions}
          label="Select color"
          selected={selected}
          onSelectedChanged={setSelected}
        />
      </Route>
      <Route path="/translator">
        <Translator />
      </Route>
    </div>
  );
};

export default App;
