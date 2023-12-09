import { tasks } from "../mock/task.js";
import { consts } from "../const.js";
import { generateId } from "./generateId.js";

export class TasksService {
  static getBoardTasks() {
    return tasks;
  }

  static getTasksByStatus(status) {
    return tasks.filter((task) => task.status === status);
  }
  
  static create(task) {
    task.id = generateId();
    task.status = consts.status.BACKLOG;
    tasks.push(task);
  }
}
