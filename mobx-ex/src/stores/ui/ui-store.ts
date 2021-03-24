import RootStore from '../root-store';
import GlobalView from '../ui/global-view-store';

export default class UiStore {
  globalView: GlobalView;

  constructor(rootStore: RootStore) {
    this.globalView = new GlobalView(rootStore);
  }
}
