import { AbstractComponent } from "../abstractComponent.js";

export class DelBtnComponent extends AbstractComponent {
  constructor(taskService) {
    super();
    this.taskService = taskService;
  }

  getTemplate() {
    return `<button class="box-del__item">Очистить</button>`;
  }

  // Добавим новый метод, который будет вызываться после добавления компонента на страницу
  afterRender() {
    this.delTaskHandler();
  }

  delTaskHandler() {
    this.getElement()
      .querySelector(".box-del__item")
      .addEventListener("click", (e) => {
        e.preventDefault();
        // Вызываем метод для удаления задач со статусом "DEL"
        this.taskService.deleteTasksByStatus("DEL");
        // После удаления, обновляем отображение доски задач
        refreshTaskBoard();
      });
  }
}
