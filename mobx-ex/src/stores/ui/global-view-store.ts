import { observable, autorun } from 'mobx';
import RootStore from '../root-store';

export default class GlobalView {
  @observable
  themeColor: string = 'dark';

  constructor(rootStore: RootStore) {
    autorun(() => {
      console.log(rootStore.dataStore.todoStore.list.length);
    });
  }
}
