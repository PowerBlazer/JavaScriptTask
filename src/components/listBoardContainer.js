import { consts } from "../const.js";
import { TasksService } from "../service/TaskService.js";
import { AbstractComponent } from "./abstractComponent.js";
import { TasksColumnElement } from "./taskColumnComponent.js";
import { render } from "../render.js";
import { TaskComponent } from "./taskComponent.js";
import { DelBtnComponent } from "./delBtnComponent.js";
import { EmptyTaskComponent } from "./emptyTaskComponent.js";


export class ListBoardComponent extends AbstractComponent {
  getTemplate() {
    return `<section class="board-app__list"></section>`;
  }

  initializeWindowTasks(){
    
    for (let i = 0; i < Object.values(consts.status).length; i++){
      const status = Object.values(consts.status)[i];
      const statusRu = Object.values(consts.statusRu)[i];
      const tasksInStatus = TasksService.getTasksByStatus(status);
      const taskColumnComponent = new TasksColumnElement({ status, statusRu });

      render(taskColumnComponent,this.getElement());

      if(tasksInStatus.length > 0){
        tasksInStatus.forEach(taskColumn => {
          const listTasksTheColumn = taskColumnComponent.getElement().querySelector("ul");
          const taskComponent = new TaskComponent(taskColumn);
          render(taskComponent, listTasksTheColumn);
        });
      }

      if (consts.status.DEL == status) {
        const isEmpty = tasksInStatus.filter(p => p.status == consts.status.DEL).length === 0;
        const delBtnComponent = new DelBtnComponent();
  
        if (!isEmpty){
          const listTasksTheColumn = taskColumnComponent.getElement().querySelector("ul");
          render(delBtnComponent, listTasksTheColumn);
  
          delBtnComponent.deleteTaskHandler((e) => {
            e.target.parentElement.querySelectorAll("li").forEach(li => li.remove());
            e.target.remove();
  
            const emptyComponent = new EmptyTaskComponent();
            render(emptyComponent, listTasksTheColumn);
            render(delBtnComponent, listTasksTheColumn);
            e.target.classList.add("disabled");
          })
        }
      }
    }
  }
}
