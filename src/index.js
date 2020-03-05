import TodoInput from './components/TodoInput.js';
import Store from './lib/Store.js';

window.addEventListener('DOMContentLoaded', () => {
  const todoInputEl = document.getElementById('todoInput');
  const todoListEl = document.getElementById('todoList');

  const initialState = [];
  const todoStore = new Store(() => {}, initialState);
  const todoInput = new TodoInput({ store: todoStore, element: todoInputEl });

  todoInput.init();
});
