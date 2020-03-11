import Components from '../lib/Components.js';
import delegate from '../utils/delegate/functionDelegate.js';

export default class Carousel extends Components {
  constructor(props) {
    super(props);
  }
  init() {
    this.render();
    this.eventOn();
  }

  render() {
    this.el.innerHTML = /*html*/ `
    `;
  }

  eventOn() {}
}
