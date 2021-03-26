import { computed, observable } from 'mobx';
import randomId from '../../utils/random-id';
import RootStore from '../root-store';

export default class User {
  id: string;

  private readonly rootStore: RootStore;

  @observable
  name: string;

  constructor(name: string, rootStore: RootStore) {
    this.name = name;
    this.id = randomId();
    this.rootStore = rootStore;

    this.rootStore.dataStore.todoStore.addTodo('Finish the project', this.id);
  }

  @computed
  get todos() {
    return this.rootStore.dataStore.todoStore.getUserTodos(this.id);
  }

  @computed
  get activeTodos() {
    return this.todos.filter((item) => item.status === 'active');
  }

  @computed
  get completedTodos() {
    return this.todos.filter((item) => item.status === 'completed');
  }
}
