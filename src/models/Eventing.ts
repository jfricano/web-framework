interface EventRegistry {
  [eventName: string]: Callback[];
}

export type Callback = () => void;
export type ListenerFunc = (eventName: string, callback: Callback) => void;
export type TriggerFunc = (eventName: keyof EventRegistry) => void;

export class Eventing {
  private events: EventRegistry = {};

  on: ListenerFunc = (eventName, callback) => {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  };

  trigger: TriggerFunc = (eventName) => {
    if (!this.events[eventName])
      throw new TypeError(`${eventName} is not a registered event`);
    else this.events[eventName].forEach((cb) => cb());
  };
}
