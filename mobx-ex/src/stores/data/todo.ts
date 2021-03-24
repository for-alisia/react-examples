import { observable, makeObservable, reaction, action } from 'mobx';
import randomId from '../../utils/random-id';
import TodoStore from './todo-store';

export type TodoStatus = 'completed' | 'active';

export default class Todo {
  @observable
  status: TodoStatus = 'active';

  @observable
  content: string;

  id: string;

  userId: string;

  private todoStore: TodoStore;

  disposer: () => void;

  constructor(content: string, userId: string, todoStore: TodoStore) {
    makeObservable(this);

    this.content = content;
    this.id = randomId();
    this.userId = userId;
    this.todoStore = todoStore;

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
  changeStatus(status: TodoStatus) {
    if (this.status === status) {
      console.log(`Item is already ${status}`);
      return;
    }
    this.status = status;
  }

  @action
  remove() {
    this.todoStore.removeItem(this.id);
  }

  dispose() {
    this.disposer();
  }
}
