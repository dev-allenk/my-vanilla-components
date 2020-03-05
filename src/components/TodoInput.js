import Components from '../lib/Components.js';
import { delegate } from '../utils/index.js';

export default class TodoInput extends Components {
  constructor(props) {
    super(props);
  }
  init() {
    this.render();
    this.eventOn();
  }

  render() {
    this.el.innerHTML = /*html*/ `
      <input type='text' class='todoInput' />
      <button type='submit' class='addBtn'>추가</button>    
    `;
  }

  eventOn() {
    delegate({
      element: this.el,
      eventType: 'click',
      className: 'addBtn',
      callback: this.addTodo.bind(this)
    });
  }

  addTodo() {
    this.store.dispatch({
      type: 'addTodo',
      payload: {
        id: (Math.random() * 10e3) | 0,
        content: this.el.firstElementChild.value
      }
    });
  }
}
