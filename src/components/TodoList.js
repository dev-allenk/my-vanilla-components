import Components from '../lib/Components.js';
import { delegate } from '../utils/index.js';

export default class TodoList extends Components {
  constructor(props) {
    super(props);
  }
  init() {
    this.render();
    this.eventOn();
  }

  render() {
    this.el.innerHTML = /*html*/ `
      <ul>
        ${super.state
          .map(
            item => /*html*/ `
              <li>
                ${item.content}
                <button type='button' class='deleteBtn' data-id=${item.id}> 삭제 </button>
              </li>`
          )
          .join('')}
      </ul>
    `;
  }

  eventOn() {
    delegate({
      element: this.el,
      eventType: 'click',
      className: 'deleteBtn',
      callback: this.deleteTodo.bind(this)
    });
  }

  deleteTodo({ target }) {
    this.store.dispatch({
      type: 'deleteTodo',
      payload: { id: Number(target.dataset.id) }
    });
  }
}
