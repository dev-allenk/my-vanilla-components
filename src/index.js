import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import Carousel from './components/Carousel.js';
import Store from './lib/Store.js';
import reducer from './reducer/reducer.js';

window.addEventListener('DOMContentLoaded', () => {
  const todoInputEl = document.getElementById('todoInput');
  const todoListEl = document.getElementById('todoList');
  const carouselEl = document.getElementById('carousel');

  const todoState = [];
  const carouselState = {};
  const todoStore = new Store(reducer, todoState);
  const carouselStore = new Store(reducer, carouselState);

  const todoInput = new TodoInput({ store: todoStore, element: todoInputEl });
  const todoList = new TodoList({ store: todoStore, element: todoListEl });
  const carousel = new Carousel({ store: carouselStore, element: carouselEl });

  todoInput.init();
  todoList.init();
  carousel.init();
});
