import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/helpers/use-store';
import TodoComponent from './TodoComponent';
import { useState } from 'react';
import User from '../stores/data/user';

interface TodoListProps {
  user?: User;
}

const TodoList: React.FC<TodoListProps> = ({ user }) => {
  const {
    dataStore: { todoStore },
  } = useStore();

  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.length > 1) {
      todoStore.addTodo(input, user ? user.id : '111');
      setInput('');
    }
  };

  const activeTodos = user ? user.activeTodos : todoStore.activeTodos;
  const completedTodos = user ? user.completedTodos : todoStore.completedTodos;

  return (
    <div>
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={addTodo}>
            ADD TODO
          </button>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Active Todos ({activeTodos.length})</div>
        <ul className="list-group">
          {activeTodos.map((todo) => (
            <TodoComponent key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Completed Todos ({completedTodos.length})</div>
        <ul className="list-group">
          {completedTodos.map((todo) => (
            <TodoComponent key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default observer(TodoList);
