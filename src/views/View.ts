import { Model } from '../models';

export type EventCallback = () => void;
export interface EventsMap {
  [eventType: string]: EventCallback;
}

export abstract class View<TModel extends Model<TData>, TData> {
  constructor(public parent: Element, public model: TModel) {
    this.bindModel();
  }

  abstract template(): string;

  eventsMap(): EventsMap {
    return {};
  }

  private bindModel(): void {
    this.model.on('change', () => this.render());
  }

  protected bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
