import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import Carousel from './components/Carousel.js';
import Store from './lib/Store.js';
import reducer from './reducer/reducer.js';

const todoState = [];
const carouselState = {};
const todoStore = new Store(reducer, todoState);
const carouselStore = new Store(reducer, carouselState);

const todoInput = new TodoInput({ store: todoStore });
const todoList = new TodoList({ store: todoStore });
const carousel = new Carousel({ store: carouselStore });

window.addEventListener('DOMContentLoaded', () => {
  const todoInputEl = document.getElementById('todoInput');
  const todoListEl = document.getElementById('todoList');
  const carouselEl = document.getElementById('carousel');

  todoInput.mount(todoInputEl);
  todoList.mount(todoListEl);
  carousel.mount(carouselEl);
});
