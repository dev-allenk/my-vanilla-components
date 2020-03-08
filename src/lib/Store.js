export default class Store {
  constructor(reducer, initialState = {}) {
    this.state = initialState;
    this.observers = [];
    this.reducer = reducer;
    this.dispatch = this.dispatch.bind(this);
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.notify();
  }

  notify() {
    this.observers.forEach(callback => callback());
  }
}
