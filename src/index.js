import TodoInput from './components/TodoInput.js';
import TodoList from './components/TodoList.js';
import Carousel from './components/Carousel.js';
import Store from './lib/Store.js';
import reducer from './reducer/reducer.js';
import api from './api.js';

const todoState = [];
const carouselState = {};
const todoStore = new Store(reducer, todoState, { logger: true });
const carouselStore = new Store(reducer, carouselState, { logger: true });

const todoInput = new TodoInput({ store: todoStore });
const todoList = new TodoList({ store: todoStore });
const carousel = new Carousel({ store: carouselStore, api });

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  todoInput.mount(root);
  todoList.mount(root);
  carousel.mount(root);
});
