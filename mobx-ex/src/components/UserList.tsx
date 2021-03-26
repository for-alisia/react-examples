import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/helpers/use-store';
import { useState } from 'react';
import User from '../stores/data/user';
import TodoList from './TodoList';

const UserList = () => {
  const {
    dataStore: { userStore },
  } = useStore();
  const [text, setText] = useState('');
  const [currentUser, setCurrentUser] = useState<User>(userStore.usersList[0]);

  const addUser = () => {
    if (text.length < 3) {
      return;
    }

    userStore.addUser(text);
  };

  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="input-group">
          <input
            className="form-control"
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" onClick={addUser}>
              ADD USER
            </button>
          </div>
        </div>
        <ul className="list-group">
          {userStore.usersList.map((user) => (
            <li
              className={`list-group-item ${currentUser.id === user.id ? 'active' : 'hover'}`}
              key={user.id}
              onClick={() => setCurrentUser(userStore.getUser(user.name) as User)}
            >
              <span>{user.name}</span>
              <button
                onClick={() => userStore.removeUser(user.name)}
                className="btn btn-danger float-right"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-sm-8">
        <TodoList user={currentUser} />
      </div>
    </div>
  );
};

export default observer(UserList);
