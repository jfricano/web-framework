interface EventRegistry {
  [eventName: string]: Callback[];
}

export type Callback = () => void;

export class Eventing {
  private events: EventRegistry = {};

  on = (eventName: string, callback: Callback): void => {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  };

  trigger = (eventName: keyof EventRegistry): void => {
    if (!this.events[eventName])
      throw new TypeError(`${eventName} is not a registered event`);
    else this.events[eventName].forEach((cb) => cb());
  };
}
