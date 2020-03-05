import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import Store from './lib/Store.js';
import reducer from './reducer/reducer.js';

window.addEventListener('DOMContentLoaded', () => {
  const todoInputEl = document.getElementById('todoInput');
  const todoListEl = document.getElementById('todoList');

  const initialState = [];
  const todoStore = new Store(reducer, initialState);
  const todoInput = new TodoInput({ store: todoStore, element: todoInputEl });
  const todoList = new TodoList({ store: todoStore, element: todoListEl });

  todoInput.init();
  todoList.init();
});
