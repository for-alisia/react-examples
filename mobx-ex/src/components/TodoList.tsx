import { observer } from 'mobx-react-lite';
import { useStore } from '../stores/helpers/use-store';
import TodoComponent from './TodoComponent';
import { useState } from 'react';

const TodoList = () => {
  const {
    dataStore: { todoStore },
  } = useStore();

  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.length > 1) {
      todoStore.addTodo(input, '111');
      setInput('');
    }
  };

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
        <div className="card-header">Active Todos ({todoStore.activeTodos.length})</div>
        <ul className="list-group">
          {todoStore.activeTodos.map((todo) => (
            <TodoComponent key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Completed Todos ({todoStore.completedTodos.length})</div>
        <ul className="list-group">
          {todoStore.completedTodos.map((todo) => (
            <TodoComponent key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default observer(TodoList);
