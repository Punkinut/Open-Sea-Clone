import { makeAutoObservable } from "mobx";

export class UniversalStore {
  state;

  static getInitialState() {
    return { mockData: [] };
  }

  constructor() {
    this.state = UniversalStore.getInitialState();
    makeAutoObservable(this);
  }
}
