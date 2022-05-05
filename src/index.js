import './index.css';
import List from './todo-list.js';


const todoInput = document.querySelector('.todo-input');
// const checkBox = document.querySelector('#check');
// const myTodo = document.querySelector('.my-todo');
// const optionIcon = document.querySelector('.fa-ellipsis-vertical');
// const deleteItem = document.querySelector('.show');
// const clearAllBtn = document.querySelector('.clearAll');
const enterKey = document.querySelector('.down-left');
// const todoDisplay = document.querySelector('.todos-display');
// const labelTag = document.getElementsByTagName('label');
// const show = document.querySelector('.show');







let todos = JSON.parse(localStorage.getItem('my-todo')) !== null ? (todos = JSON.parse(localStorage.getItem('my-todo'))) : [];
let editId;
let ifEditedTask = false;

if (todoInput) {

    todoInput.addEventListener('keyup', e => {
     let userTask = todoInput.value;
     if (userTask === '') {
        return false;
      }
     if(e.key === 'Enter' && userTask) {
         if (!ifEditedTask) {
             if (!todos) {
            todos =[];
        
        }    
        
        let userInfor = {name: userTask, status:'pending' };
        todos.push(userInfor);
         } else{
        todos[editId].name = userTask;
        ifEditedTask = true;
        
        }
        todoInput.value ='';
        localStorage.setItem('my-todo', JSON.stringify(todos));
        List.showtodo();
    