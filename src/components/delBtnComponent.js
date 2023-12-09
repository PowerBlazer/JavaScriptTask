import { AbstractComponent } from "./abstractComponent.js";
import { EmptyTaskComponent } from "./emptyTaskComponent.js";

export class DelBtnComponent extends AbstractComponent {
  constructor() {
    super();
    
  }

  getTemplate() {
    return `<button class="box-del__item">Очистить</button>`;
  }

  deleteTaskHandler() {
    this.getElement()
      .addEventListener("click", (e) => {
        e.target.parentElement.querySelectorAll("li").forEach(li => li.remove());
        e.target.remove();

        const emptyComponent = new EmptyTaskComponent();
        render(emptyComponent, listTasksTheColumn);
        render(delBtnComponent, listTasksTheColumn);
        e.target.classList.add("disabled");
      });
  }
}
