import { makeAutoObservable } from 'mobx';
import RootStore from '../root-store';
import User from './user';

export default class UserStore {
  usersList: User[] = [];

  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this, {
      getUser: false,
    });
  }

  getUser(name: string): User | undefined {
    return this.usersList.find((user) => user.name === name);
  }

  addUser(name: string) {
    const newUser = new User(name, this.rootStore);

    this.usersList.push(newUser);
  }

  removeUser(name: string) {
    const userToDelete = this.getUser(name);
    if (userToDelete) {
      userToDelete.todos.forEach((todo) => this.rootStore.dataStore.todoStore.removeItem(todo.id));

      const idx = this.usersList.findIndex((user) => user.name === name);

      this.usersList.splice(idx, 1);
    }
  }
}
