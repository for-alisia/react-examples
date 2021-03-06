import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore } from './stores/helpers/create-store';
import { StoreProvider } from './stores/helpers/store-context';

const rootStore = createStore();

// Users
rootStore.dataStore.userStore.addUser('Max');
rootStore.dataStore.userStore.addUser('Alex');
rootStore.dataStore.userStore.addUser('Alice');
rootStore.dataStore.userStore.addUser('Lena');

const user = rootStore.dataStore.userStore.getUser('Alex');

if (user) {
  rootStore.dataStore.todoStore.addTodo('First todo', user.id);
  rootStore.dataStore.todoStore.addTodo('Second todo', user.id);

  rootStore.dataStore.userStore.removeUser(user.name);
}

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={rootStore}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
