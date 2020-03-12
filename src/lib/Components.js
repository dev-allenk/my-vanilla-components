import Store from './Store.js';

export default class Components {
  constructor(props) {
    this.render = this.render.bind(this);
    this.status = { isInitialRender: true };
    this.store = props.store;
    this.el = props.element;

    props.store instanceof Store
      ? props.store.subscribe(this.render)
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
  render() {}
}
