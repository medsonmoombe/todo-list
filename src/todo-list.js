const todoInput = document.querySelector('.todo-input');
// const checkBox = document.querySelector('#check');
// const myTodo = document.querySelector('.my-todo');
// const optionIcon = document.querySelector('.fa-ellipsis-vertical');
// const deleteItem = document.querySelector('.show');
// const clearAllBtn = document.querySelector('.clearAll');
// const enterKey = document.querySelector('.down-left');
const todoDisplay = document.querySelector('.todos-display');
// const labelTag = document.getElementsByTagName('label');
// const show = document.querySelector('.show');


class List {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('my-todo')) !== null ? (this.todos = JSON.parse(localStorage.getItem('my-todo'))) : [];
        if (!this.todos) {
          this.todos = [];
        }
        this.showtodo();
    }
    //showtodo function
    static showtodo =() =>{
            let li = '';
            if (this.todos) {
                this.todos.forEach((todo, id) => {
                    let completeTask = todo.status == 'completed' ? 'checked' : '';
                    li += `
                    <label for="checkbox">
                    <input type="checkbox" id="${id}" onclick= "updateTask(this)" ${completeTask} >
                    <p class="my-todo ${completeTask}" contenteditable="true" onclick= "editTodo(${id},'${todo.name}')">${todo.name}</p>
                    <div class="show-options">
                      <div class='show'>
                        <i class="fa-solid fa-trash-can" onclick= "deleteTodo(${id})" ></i>
                      </div>
                    </div>
                </label>
                    `;
                });
              
            }
      todoDisplay.innerHTML = li;
    } 

 static updateTask(updateTaskValue) {
        
        let seletedTask = updateTaskValue.parentElement.children[1];
        if (updateTaskValue.checked) {
            seletedTask.classList.add('checked');
            this.todos[updateTaskValue.id].status ='completed';
        }else {
            seletedTask.classList.remove('checked');
            this.todos[updateTaskValue.id].status ='pending';
            
        }
        localStorage.setItem('my-todo', JSON.stringify(this.todos)); 
    }
    
    static deleteTodo = (taskSelected) => {
        this.todos.splice(taskSelected, 1);
        localStorage.setItem('my-todo', JSON.stringify(this.todos)); 
        this.showtodo();
    }
    
    static editTodo = (taskId, taskName) => {
        editId = taskId;
        todoInput.value = taskName;
    
    }
  }
  
  export default List