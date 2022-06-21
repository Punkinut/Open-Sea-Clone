import { makeAutoObservable } from "mobx";

export class GlobalStore {
  state;

  static getInitialState() {
    return { nfts: [], listings: [], collection: {} };
  }

  constructor() {
    this.state = GlobalStore.getInitialState();
    makeAutoObservable(this);
  }

  setNfts(nfts) {
    this.state.nfts = nfts;
  }

  setListings(listings) {
    this.state.listings = listings;
  }

  setCollection(collection) {
    this.state.collection = collection;
  }
}
