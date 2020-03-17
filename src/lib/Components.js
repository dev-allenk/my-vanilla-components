import Store from './Store.js';

export default class Components {
  constructor(props) {
    this.status = { isInitialRender: true };
    this.store = props.store;

    props.store instanceof Store
      ? props.store.subscribe(this.render.bind(this))
      : console.warn('TYPE ERROR: props.store');
  }

  get state() {
    return this.store.state;
  }

  get isInitialRender() {
    if (this.status.isInitialRender) {
      this.status.isInitialRender = false;
      return true;
    }
    return false;
  }

  mount(element) {
    this.el = element;
    this.init();
  }

  init() {
    //do something when component mounts
  }
  render() {
    //do something when component's state changes
  }
}
