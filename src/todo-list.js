class List {
    constructor() {
      this.list = JSON.parse(localStorage.getItem('todolist'));
      if (!this.list) {
        this.list = [];
      }
      this.display();
    }
  
    display() {
      this.saveData();
      const listSection = document.querySelector('.items');
      listSection.innerHTML = '';
      this.list.forEach((work) => {
        let taskItem = `
       <li class="list-items" id="item-data-${work.index}">`;
        if (work.completed) {
          taskItem += `
              <span class="material-icons done update-status" data="${work.index}">
                done
              </span>
              <p contenteditable="true" class="completed work" data="${work.index}">
                ${work.description}
              </p>
              `;
        } else {
          taskItem += `
              <span class="material-icons  update-status"  data="${work.index}">
                check_box_outline_blank
              </span>
              <p contenteditable="true" class="work" data="${work.index}">
                ${work.description}
              </p>`;
        }
        taskItem += `
            <span class="material-icons delete-work" data="${work.index}">
              delete
            </span>
          </li>
        `;
        listSection.innerHTML += taskItem;
      });
      this.activateActions();
    }

}