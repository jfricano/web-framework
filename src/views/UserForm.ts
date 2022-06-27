import { User } from '../models';

type EventCallback = () => void;
interface EventsMap {
  [eventType: string]: EventCallback;
}

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  private bindModel(): void {
    this.model.on('change', () => this.render());
  }

  onSetAgeClick: EventCallback = () => {
    this.model.setRandomAge();
  };

  eventsMap(): EventsMap {
    return {
      'click:.set-age': this.onSetAgeClick,
    };
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button>Click Me</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }

  private bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');
      fragment.querySelectorAll(selector).forEach((el) => {
        el.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }
}
