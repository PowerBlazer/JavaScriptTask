import { AbstractComponent } from "./abstractComponent.js";

export class EmptyTaskComponent extends AbstractComponent {
  getTemplate() {
    return `<li class="empty">Перетащите карточку</li>`;
  }
}
