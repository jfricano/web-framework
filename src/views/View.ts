import { Model } from '../models';

export type EventCallback = () => void;
export interface EventsMap {
  [eventType: string]: EventCallback;
}

interface Regions {
  [key: string]: Element;
}

type HtmlSelector = string;
export interface RegionsMap {
  [key: string]: HtmlSelector;
}

export abstract class View<TModel extends Model<TData>, TData> {
  protected regions: Regions = {};

  protected constructor(public parent: Element, public model: TModel) {
    this.bindModel();
  }

  protected abstract template(): string;

  protected regionsMap(): RegionsMap {
    return {};
  }

  protected eventsMap(): EventsMap {
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

  private mapRegions(fragment: DocumentFragment): void {
    const regionsMap = this.regionsMap();

    for (const regionsKey in regionsMap) {
      const selector = regionsMap[regionsKey];
      const element = fragment.querySelector(selector);
      if (element) {
        this.regions[regionsKey] = element;
      }
    }
  }

  protected onRender(): void {}

  render(): void {
    const templateElement = document.createElement('template');
    this.parent.innerHTML = '';
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);
    this.mapRegions(templateElement.content);
    this.onRender();

    this.parent.append(templateElement.content);
  }
}
