import { makeAutoObservable } from 'mobx';
import randomId from '../../utils/random-id';
import RootStore from '../root-store';

export default class User {
  id: string;

  private readonly rootStore: RootStore;

  name: string;

  constructor(name: string, rootStore: RootStore) {
    this.name = name;
    this.id = randomId();
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      id: false,
    });

    this.rootStore.dataStore.todoStore.addTodo('Finish the project', this.id);
  }

  get todos() {
    return this.rootStore.dataStore.todoStore.getUserTodos(this.id);
  }

  get activeTodos() {
    return this.todos.filter((item) => item.status === 'active');
  }

  get completedTodos() {
    return this.todos.filter((item) => item.status === 'completed');
  }
}
