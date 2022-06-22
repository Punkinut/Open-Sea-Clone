import { makeAutoObservable, toJS } from "mobx";

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
      this.state.nfts = JSON.parse(storedNfts);
    }
    if (storedListings) {
      this.state.listings = JSON.parse(storedListings);
    }
    if (storedCollection) {
      this.state.collection = JSON.parse(storedCollection);
    }
  }

  setNfts(nfts) {
    this.state.nfts = nfts;
    localStorage.setItem("nfts", JSON.stringify(toJS(nfts)));
  }

  setListings(listings) {
    this.state.listings = listings;
    localStorage.setItem("listings", JSON.stringify(toJS(listings)));
  }

  setCollection(collection) {
    this.state.collection = collection;
    localStorage.setItem("collection", JSON.stringify(toJS(collection)));
  }
}
