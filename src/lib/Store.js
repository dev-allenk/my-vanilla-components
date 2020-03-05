export default class Store {
  constructor(reducer, initialState = {}) {
    this.state = initialState;
    this.observers = {};
    this.reducer = reducer;
    this.dispatch = this.dispatch.bind(this);
  }

  subscribe(name, render) {
    this.observers[name] = render;
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.notify();
  }

  notify() {
    Object.keys(this.observers).forEach(name => this.observers[name]());
  }
}
