interface EventRegistry {
  [eventName: string]: Callback[];
}

export type Callback = (error?: Error) => void;
export type ListenerFunc = (eventName: string, callback: Callback) => void;
export type TriggerFunc = (
  eventName: keyof EventRegistry,
  error?: Error
) => void;

export class Eventing {
  private events: EventRegistry = {};

  on: ListenerFunc = (eventName, callback) => {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  };

  trigger: TriggerFunc = (eventName, error) => {
    if (!this.events[eventName])
      console.warn(`${eventName} is not a registered event`);
    else
      this.events[eventName].forEach((cb) =>
        cb(eventName === 'error' ? error : undefined)
      );
  };
}
