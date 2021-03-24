import { autorun } from 'mobx';
import RootStore from '../root-store';

export default class GlobalView {
  constructor(rootStore: RootStore) {
    autorun(() => {
      console.log(
        ` We have ${rootStore.dataStore.userStore.usersList.length} users with ${
          rootStore.dataStore.todoStore.items.length
        } todos.
          Names of the users are: ${rootStore.dataStore.userStore.usersList.map(
            (user) => user.name
          )}
          We have this todos: ${rootStore.dataStore.todoStore.items.map((todo) => todo.content)}
        `
      );
    });
  }
}
