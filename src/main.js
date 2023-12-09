import { HeaderComponent } from "./components/headerComponent.js";
import { render, RenderPosition } from "./render.js";
import { FormAddTaskComponent } from "./components/addTaskComponent.js";
import { ListBoardComponent } from "./components/listBoardContainer.js";
import { TasksService } from "./service/TaskService.js";


const appContainer = document.querySelector(".board-app");
const addTaskContainer = document.querySelector(".addtask-app");
const addTaskFormComponent = new FormAddTaskComponent();
const taskBoardContainer = new ListBoardComponent();

render(new HeaderComponent(), appContainer, RenderPosition.BEFOREBEGIN);
render(addTaskFormComponent, addTaskContainer);
render(taskBoardContainer, addTaskContainer);

taskBoardContainer.initializeWindowTasks();

addTaskFormComponent.setAddTaskHandler((taskTitle) => {
  const newTask = { title: taskTitle };
  TasksService.create(newTask);
  updateTasksWindow();
});

function updateTasksWindow() {
  taskBoardContainer.getElement().innerHTML = "";
  taskBoardContainer.initializeWindowTasks()
}






