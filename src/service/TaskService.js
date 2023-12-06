import { tasks } from "../mock/task.js";
import { Constanats } from "../const.js";
import { generateId } from "./generateId.js";
export class TasksService {
  #boardTasks = tasks;

  getBoardTasks() {
    return this.#boardTasks;
  }

  getTasksByStatus(status) {
    return this.#boardTasks.filter((task) => task.status === status);
  }
  create(task) {
    task.id = generateId();
    task.status = Constanats.Status.BACKLOG;
    this.#boardTasks.push(task);
  }
  deleteTasksByStatus(status) {
    this.#boardTasks = this.#boardTasks.filter(
      (task) => task.status !== status
    );
    localStorage.setItem("tasks", JSON.stringify(this.#boardTasks));
  }
}
