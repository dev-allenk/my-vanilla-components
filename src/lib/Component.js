import Store from './Store.js';

export default class Component {
  constructor(props) {
    this.status = { isInitialRender: true };
    this.props = { ...props };

    props.store instanceof Store
      ? props.store.subscribe(this.render.bind(this))
      : console.warn('TYPE ERROR: props.store');
  }
  get dispatch() {
    return this.props.store.dispatch;
  }

  get api() {
    return this.props.api;
  }

  get state() {
    return this.props.store.state;
  }

  get isInitialRender() {
    if (this.status.isInitialRender) {
      this.status.isInitialRender = false;
      return true;
    }
    return false;
  }

  mount(element, params) {
    this.el = document.createElement('div');
    this.el.className = this.constructor.name;
    this.init(params);

    element.appendChild(this.el);
  }

  init() {
    //do something when component mounts
  }
  render() {
    //do something when component's state changes
  }
  shouldComponentUpdate() {
    //return boolean
  }
}
