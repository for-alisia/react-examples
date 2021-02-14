/** Libraries */
import React from 'react';

/** Components */
import Accordion from '../components/accordion/accordion.component';

/** Data */
import { accItems as items } from '../data';

/** Styles */
import './app.styles.css';

const App = () => {
  return (
    <div className="ui container">
      <h1>Widgets</h1>
      <Accordion items={items} />
    </div>
  );
};

export default App;
