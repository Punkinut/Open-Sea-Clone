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

  loadState() {
    this.state = GlobalStore.getInitialState();
    const storedNfts = localStorage.getItem("nfts");
    const storedListings = localStorage.getItem("listings");
    const storedCollection = localStorage.getItem("collection");
    if (storedNfts) {
      this.state.nfts = storedNfts;
    }
    if (storedListings) {
      this.state.listings = storedListings;
    }
    if (storedCollection) {
      this.state.collection = storedCollection;
    }
  }

  setNfts(nfts) {
    this.state.nfts = nfts;
    localStorage.setItem("nfts", JSON.stringify(nfts));
  }

  setListings(listings) {
    this.state.listings = listings;
    localStorage.setItem("listings", JSON.stringify(listings));
  }

  setCollection(collection) {
    this.state.collection = collection;
    localStorage.setItem("collection", JSON.stringify(collection));
  }
}
