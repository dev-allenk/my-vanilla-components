import Components from '../lib/Components.js';
import delegate from '../utils/delegate/functionDelegate.js';

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
    delegate(this.deleteTodo.bind(this))
      .to(this.el)
      .when('click')
      .className('deleteBtn');
  }

  deleteTodo({ target }) {
    this.store.dispatch({
      type: 'deleteTodo',
      payload: { id: Number(target.dataset.id) }
    });
  }
}
