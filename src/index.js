import './index.css';
import List from './todo-list.js';

const todolist = new List();
todolist.display();

document.querySelector('#form-area').addEventListener('submit', (e) => {
  e.preventDefault();
  const activity = e.target.elements.activity.value;
  todolist.addWork(activity);
  e.target.reset();
});

document.querySelector('#delete-all').addEventListener('click', () => {
  todolist.clearAll();
});