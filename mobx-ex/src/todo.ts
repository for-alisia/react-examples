import { observable, action, makeObservable, autorun } from 'mobx';

type TTodoStatus = 'completed' | 'active';

class Todo {
  status: TTodoStatus = 'active';

  constructor(public id: string, public content: string) {}
}

class TodoList {
  @observable
  items: Todo[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  addTodo(item: Todo) {
    console.log('ACTION: Adding new todo to the list');
    this.items.push(item);
  }

  @action
  removeItem(id: string) {
    console.log('ACTION: removing item');
    this.items = this.items.filter((item) => item.id !== id);
  }

  @action
  completeItem(id: string) {
    console.log('ACTION: Completing todo');
    const todo = this.items.find((item) => item.id === id);

    if (!todo) {
      console.log('No todo was found');
      return;
    }

    if (todo.status === 'completed') {
      console.log('Todo is already completed!');
      return;
    }

    this.items = this.items.filter((item) => item.id !== id);
    todo.status = 'completed';
    this.items.push(todo);
  }
}

const todoList = new TodoList();

autorun(() => {
  console.log('TodoList:');
  if (todoList.items.length === 0) {
    console.log('No items inside yet');
  }
  todoList.items.map((item) => console.log(item));
  console.log('------');
});

todoList.addTodo(new Todo('td1', 'first todo'));
todoList.addTodo(new Todo('td2', 'second todo'));
todoList.completeItem('td1');
todoList.removeItem('td2');
