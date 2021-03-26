import { makeAutoObservable } from 'mobx';
import randomId from '../../utils/random-id';
import TodoStore from './todo-store';

export type TodoStatus = 'completed' | 'active';

export default class Todo {
  status: TodoStatus = 'active';

  content: string;

  id: string;

  userId: string;

  private todoStore: TodoStore;

  constructor(content: string, userId: string, todoStore: TodoStore) {
    this.content = content;
    this.id = randomId();
    this.userId = userId;
    this.todoStore = todoStore;

    makeAutoObservable(this, {
      id: false,
      userId: false,
    });
  }

  changeContent(content: string) {
    this.content = content;
  }

  changeStatus() {
    if (this.status === 'active') {
      this.status = 'completed';
    } else {
      this.status = 'active';
    }
  }

  remove() {
    this.todoStore.removeItem(this.id);
  }
}
