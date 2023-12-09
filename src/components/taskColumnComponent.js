import { AbstractComponent } from "./abstractComponent.js";

export class TasksColumnElement extends AbstractComponent {
  constructor({ id, title, status,statusRu }) {
    super();
    this._id = id;
    this._status = status;
    this._title = title;
    this._statisRu = statusRu
  }

  getTemplate() {
    
    return `<div class="box ${this._status}">
      <h2>${this._statisRu}</h2>
        <ul></ul>
  </div>`;
  }
}
