// import "./index.css";


// const todos = [
//   {
//     description: 'Road Run',
//     completed: true,
//     index: 0,
//   },

//   {
//     description: 'Bath',
//     completed: true,
//     index: 1,
//   },
//   {
//     description: 'Code',
//     completed: false,
//     index: 2,
//   },
//   {
//     description: 'Complete Project',
//     completed: false,
//     index: 3,
//   },
// ];

// const todoDisplay = document.querySelector('.todos-display');
// const showtodo =() =>{
//     let li = '';
    
//         todos.forEach((todo, id) => {
//             li += `
//             <label for="checkbox">
//             <input type="checkbox" ${id}>
//             <p class="my-todo" contenteditable="true">${todo.description}</p>
//             <div class="show-options">
//             <i class="fa-solid fa-ellipsis-vertical"></i>
//               <div class='show'>
//                 <i class="fa-solid fa-trash-can"" ></i>
//               </div>
//             </div>
//         </label>
//             `;
//         });
//       todoDisplay.innerHTML = li;
//     }

 

// showtodo();

// todos.sort((a, b) => {
//   if (a.index < b.index) return -1;
//   if (a.index > b.index) return 1;
//   return 0;
// });