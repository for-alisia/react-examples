/** Libraries */
import React from 'react';

/** Components */
import Accordion from '../components/accordion/accordion.component';
import Search from '../components/search/search.component';

/** Data */
import { accItems as items } from '../data';

/** Styles */
import './app.styles.css';

const App = () => {
  return (
    <div className="ui container">
      <h1>Widgets</h1>
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
