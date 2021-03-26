import React from 'react';
import './App.css';
import { useStore } from './stores/helpers/use-store';
import { Views } from './stores/ui/global-view-store';
import { observer } from 'mobx-react-lite';
import TodoList from './components/TodoList';
import UserList from './components/UserList';

function App() {
  const {
    uiStore: { globalView },
  } = useStore();

  const getCurrentView = () => {
    if (globalView.currentView === Views.Todos) {
      return <TodoList />;
    }

    if (globalView.currentView === Views.Users) {
      return <UserList />;
    }

    return null;
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div style={{ flexDirection: 'row' }} className="navbar-nav">
          <span className={`nav-item ${globalView.currentView === Views.Todos ? 'active' : null}`}>
            <a href="#" className="nav-link" onClick={() => globalView.updateView(Views.Todos)}>
              {`${Views.Todos}`} View
            </a>
          </span>
          <span
            style={{ marginLeft: '15px' }}
            className={`nav-item ${globalView.currentView === Views.Users ? 'active' : null}`}
          >
            <a href="#" className="nav-link" onClick={() => globalView.updateView(Views.Users)}>
              {`${Views.Users}`} View
            </a>
          </span>
        </div>
      </nav>
      {getCurrentView()}
    </div>
  );
}

export default observer(App);
