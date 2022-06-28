import { EventCallback, EventRegistry, Events } from './Model';

export class Eventing implements Events {
  private events: EventRegistry = {};

  on = (eventName: string, callback: EventCallback) => {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  };

  trigger = (eventName: string, error?: Error) => {
    if (!this.events[eventName]) {
      console.warn(`${eventName} is not a registered event`);
    } else {
      this.events[eventName].forEach((cb) =>
        cb(eventName === 'error' ? error : undefined)
      );
    }
  };
}
