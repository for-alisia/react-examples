import { observable, action, makeObservable, computed, reaction, when } from 'mobx';

type TTodoStatus = 'completed' | 'active';

class Todo {
  @observable
  status: TTodoStatus = 'active';

  @observable
  content: string;

  id: string;

  disposer: () => void;

  constructor(id: string, content: string) {
    makeObservable(this);

    this.content = content;
    this.id = id;

    this.disposer = reaction(
      () => this.status,
      () =>
        console.log(`Item ${this.id} has changed: status: ${this.status}, content: ${this.content}`)
    );
  }

  @action
  changeContent(content: string) {
    this.content = content;
  }

  @action
  changeStatus(status: TTodoStatus) {
    if (this.status === status) {
      console.log(`Item is already ${status}`);
      return;
    }
    this.status = status;
  }

  dispose() {
    this.disposer();
  }
}

class TodoList {
  @observable
  items: Todo[] = [];

  constructor() {
    makeObservable(this);

    reaction(
      () => this.items.length,
      () =>
        console.log(
          `Total items: ${this.items.length}, Completed: ${this.completedTodos.length}, active: ${this.activeTodos.length}`
        )
    );

    when(
      () => this.items.length > 0 && this.items.every((item) => item.status === 'completed'),
      () => console.log('All items were completed!')
    );
  }

  findItem(id: string) {
    return this.items.find((item) => item.id === id);
  }

  @action
  addTodo(id: string, content: string) {
    this.items.push(new Todo(id, content));
  }

  @action
  removeItem(id: string) {
    const todoToDelete = this.findItem(id);
    if (!todoToDelete) {
      console.log('No Item With This ID was found');
      return;
    }
    todoToDelete.dispose();
    this.items = this.items.filter((item) => item.id !== id);
  }

  @action
  changeItemStatus(id: string, status: TTodoStatus) {
    const todo = this.items.find((item) => item.id === id);

    if (!todo) {
      console.log('No todo was found');
      return;
    }

    todo.changeStatus(status);
  }

  @action
  updateItemContent(id: string, content: string) {
    const todo = this.items.find((item) => item.id === id);

    if (!todo) {
      console.log('Item with this id was not found');
      return;
    }

    todo.changeContent(content);
  }

  @computed
  get activeTodos() {
    return this.items.filter((item) => item.status === 'active');
  }

  @computed
  get completedTodos() {
    return this.items.filter((item) => item.status === 'completed');
  }
}

const todoList = new TodoList();

// autorun(() => {
//   console.log('TodoList:');
//   if (todoList.items.length === 0) {
//     console.log('No items inside yet');
//   }
//   todoList.items.map((item) =>
//     console.log(`Item with id ${item.id}: ${item.content}, status: ${item.status}`)
//   );

//   console.log('ACTIVE:');
//   if (todoList.activeTodos.length === 0) {
//     console.log('No active todo was found');
//   }
//   todoList.activeTodos.map((item) =>
//     console.log(`Item with id ${item.id}: ${item.content}, status: ${item.status}`)
//   );

//   console.log('COMPLETED:');
//   if (todoList.completedTodos.length === 0) {
//     console.log('No completed todo was found');
//   }
//   todoList.completedTodos.map((item) =>
//     console.log(`Item with id ${item.id}: ${item.content}, status: ${item.status}`)
//   );

//   console.log('------');
// });

todoList.addTodo('td1', 'first todo');
todoList.addTodo('td2', 'second todo');
todoList.changeItemStatus('td1', 'completed');
todoList.changeItemStatus('td1', 'active');
todoList.updateItemContent('td2', 'Updated content');
todoList.removeItem('td2');
todoList.changeItemStatus('td1', 'completed');
