import TodoStore from './todo-store';
import UserStore from './user-store';
import RootStore from '../root-store';

export default class DataStore {
  todoStore: TodoStore;
  userStore: UserStore;

  constructor(rootStore: RootStore) {
    this.todoStore = new TodoStore(rootStore);
    this.userStore = new UserStore(rootStore);
  }
}
