import Todo from '../stores/data/todo';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';

interface TodoComponentProps {
  todo: Todo;
}

const TodoComponent: React.FC<TodoComponentProps> = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState('');

  const saveTodo = () => {
    if (content.length < 2) {
      return;
    }
    todo.changeContent(content);
    setContent('');
    setIsEditing(false);
  };

  const editTodo = () => {
    setIsEditing(true);
  };

  const todoContent = isEditing ? (
    <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
  ) : (
    <span>
      TODO: {todo.content}, USERID: {todo.userId}, STATUS: {todo.status}
    </span>
  );

  const editingButton = isEditing ? (
    <button className="btn btn-primary" onClick={saveTodo}>
      Save
    </button>
  ) : (
    <button className="btn btn-primary" onClick={editTodo}>
      Edit
    </button>
  );

  const changeTodoStatus = isEditing ? null : (
    <button className="btn btn-info" onClick={() => todo.changeStatus()}>
      Change Status
    </button>
  );

  const removeButton = isEditing ? null : (
    <button className="btn btn-danger" onClick={() => todo.remove()}>
      Remove
    </button>
  );

  return (
    <li className="list-group-item">
      {todoContent}
      <div className="float-right">
        {editingButton}
        {changeTodoStatus}
        {removeButton}
      </div>
    </li>
  );
};

export default observer(TodoComponent);
