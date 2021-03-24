import { observable, makeObservable, action, computed } from 'mobx';
import RootStore from '../root-store';
import Todo, { TodoStatus } from './todo';

export default class TodoStore {
  @observable
  items: Todo[] = [];

  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    makeObservable(this);

    this.rootStore = rootStore;

    // reaction(
    //   () => this.items.length,
    //   () =>
    //     console.log(
    //       `Total items: ${this.items.length}, Completed: ${this.completedTodos.length}, active: ${this.activeTodos.length}`
    //     )
    // );

    // when(
    //   () => this.items.length > 0 && this.items.every((item) => item.status === 'completed'),
    //   () => console.log('All items were completed!')
    // );
  }

  findItem(id: string) {
    return this.items.find((item) => item.id === id);
  }

  getUserTodos(userId: string): Todo[] {
    return this.items.filter((item) => item.userId === userId);
  }

  @action
  addTodo(content: string, userId: string) {
    this.items.push(new Todo(content, userId, this));
  }

  @action
  removeItem(id: string) {
    const todoToDelete = this.findItem(id);
    if (!todoToDelete) {
      console.log('No Item With This ID was found');
      return;
    }
    todoToDelete.dispose();
    if (todoToDelete) {
      todoToDelete.dispose();
      const todoToDeleteIndex = this.items.indexOf(todoToDelete);
      this.items.splice(todoToDeleteIndex, 1);
    }
  }

  @action
  changeItemStatus(id: string, status: TodoStatus) {
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
