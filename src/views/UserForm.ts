interface EventsMap {
  [eventType: string]: () => void;
}

export class UserForm {
  constructor(public parent: Element) {}

  onButtonClick(): void {
    console.log('hi there');
  }

  onHeaderHover(): void {
    console.log('hover hover');
  }

  eventsMap(): EventsMap {
    return {
      'click:button': this.onButtonClick,
      'mouseover:h1': this.onHeaderHover,
    };
  }

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <input />
        <button>Click Me</button>
      </div>
    `;
  }

  render(): void {
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
