import { makeAutoObservable } from "mobx";

export class GlobalStore {
  state;

  static getInitialState() {
    return { mockData: [] };
  }

  constructor() {
    this.state = GlobalStore.getInitialState();
    makeAutoObservable(this);
  }
}
