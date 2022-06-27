import { EventRegistry, Events, ListenerFunc, TriggerFunc } from './Model';

export class Eventing implements Events {
  private events: EventRegistry = {};

  on: ListenerFunc = (eventName, callback) => {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  };

  trigger: TriggerFunc = (eventName, error) => {
    if (!this.events[eventName]) {
      console.warn(`${eventName} is not a registered event`);
    } else {
      this.events[eventName].forEach((cb) =>
        cb(eventName === 'error' ? error : undefined)
      );
    }
  };
}
