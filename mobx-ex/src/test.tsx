import React from 'react';
import Todo from './stores/data/todo';
import TodoStore from './stores/data/todo-store';
import { Observer, useObserver, observer } from 'mobx-react-lite';

const newTodo: Todo = new Todo('test todo', 'bhh1', new TodoStore());

/** With Observer component (we need to pass a function) */
// const Test = () => {
//   return (
//     <div>
//       <Observer>{() => <div>{newTodo.content}</div>}</Observer>
//       <div>
//         <button onClick={() => newTodo.changeContent('first Name')}>First Name</button>
//         <button onClick={() => newTodo.changeContent('last Name')}>Last Name</button>
//       </div>
//     </div>
//   );
// };

/** With useObserver Hook (we need to wrap the whole return statement with this hook)*/
// const Test = () => {
//   return useObserver(() => (
//     <div>
//       <Observer>{() => <div>{newTodo.content}</div>}</Observer>
//       <div>
//         <button onClick={() => newTodo.changeContent('first Name')}>First Name</button>
//         <button onClick={() => newTodo.changeContent('last Name')}>Last Name</button>
//       </div>
//     </div>
//   ));
// };

/** With observer HOC (we need to wrap the whole component) */
const Test = observer(() => {
  return (
    <div>
      <Observer>{() => <div>{newTodo.content}</div>}</Observer>
      <div>
        <button onClick={() => newTodo.changeContent('first Name')}>First Name</button>
        <button onClick={() => newTodo.changeContent('last Name')}>Last Name</button>
      </div>
    </div>
  );
});

export default Test;
