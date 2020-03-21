export default class Store {
  constructor(reducer, initialState = {}, options = {}) {
    this.state = initialState;
    this.observers = [];
    this.reducer = reducer;
    this.dispatch = this.dispatch.bind(this);
    this.options = options;
  }

  subscribe(callback) {
    this.observers.push(callback);
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.options.logger &&
      console.log('action: ', action, '\nstate: ', this.state);
    this.notify();
  }

  notify() {
    this.observers.forEach(callback => callback());
  }
}
