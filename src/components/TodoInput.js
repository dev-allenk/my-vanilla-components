import Component from '../lib/Component.js';
import delegate from '../utils/delegate/functionDelegate.js';

export default class TodoInput extends Component {
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
    delegate(this.addTodo.bind(this))
      .to(this.el)
      .when('click')
      .className('addBtn');
  }

  addTodo() {
    const content = this.el.firstElementChild.value;
    if (!content) return;
    super.dispatch({
      type: 'addTodo',
      payload: {
        id: (Math.random() * 10e3) | 0,
        content
      }
    });
  }
}
