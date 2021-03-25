import RootStore from '../root-store';
import { action, observable, makeObservable } from 'mobx';

export enum Views {
  Todos = 'Todos',
  Users = 'Users',
}

export default class GlobalView {
  @observable
  currentView: Views = Views.Todos;

  constructor(private rootStore: RootStore) {
    makeObservable(this);
  }

  @action
  updateView(view: Views) {
    this.currentView = view;
  }
}
