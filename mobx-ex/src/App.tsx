import React from 'react';
import './App.css';
import { useStore } from './stores/helpers/use-store';

function App() {
  const {
    dataStore: { todoStore },
  } = useStore();
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {todoStore.items.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
