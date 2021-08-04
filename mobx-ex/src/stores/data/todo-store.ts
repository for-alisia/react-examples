import { makeAutoObservable } from 'mobx';
import RootStore from '../root-store';
import Todo from './todo';

export default class TodoStore {
  items: Todo[] = [];

  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      findItem: false,
      getUserTodos: false,
    });
  }

  findItem(id: string) {
    return this.items.find((item) => item.id === id);
  }

  getUserTodos(userId: string): Todo[] {
    return this.items.filter((item) => item.userId === userId);
  }

  addTodo(content: string, userId: string) {
    this.items.push(new Todo(content, userId, this));
  }

  removeItem(id: string) {
    const todoToDelete = this.findItem(id);
    if (!todoToDelete) {
      console.log('No Item With This ID was found');
      return;
    }

    if (todoToDelete) {
      const todoToDeleteIndex = this.items.indexOf(todoToDelete);
      this.items.splice(todoToDeleteIndex, 1);
    }
  }

  changeItemStatus(id: string) {
    const todo = this.items.find((item) => item.id === id);

    if (!todo) {
      console.log('No todo was found');
      return;
    }

    todo.changeStatus();
  }

  updateItemContent(id: string, content: string) {
    const todo = this.items.find((item) => item.id === id);

    if (!todo) {
      console.log('Item with this id was not found');
      return;
    }

    todo.changeContent(content);
  }

  get activeTodos() {
    return this.items.filter((item) => item.status === 'active');
  }

  get completedTodos() {
    return this.items.filter((item) => item.status === 'completed');
  }
}
