import { AbstractComponent } from "./abstractComponent.js";

export class DelBtnComponent extends AbstractComponent {
  constructor() {
    super();
    
  }

  getTemplate() {
    return `<button class="box-del__item">Очистить</button>`;
  }

  deleteTaskHandler(handler) {
    this.getElement()
      .addEventListener("click", (e) => {
        handler(e);
      });
  }
}
