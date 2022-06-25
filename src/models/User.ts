interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

type EventRegistry = { [eventName: string]: Callback[] };

export class User {
  private events: EventRegistry = {};

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  on(eventName: string, callback: Callback): void {
    if (!this.events[eventName]) this.events[eventName] = [];
    this.events[eventName].push(callback);
  }

  trigger(eventName: keyof EventRegistry): void {
    if (!this.events[eventName])
      throw new TypeError(`${eventName} is not a registered event`);
    else this.events[eventName].forEach((cb) => cb());
  }

  fetch(param: unknown): Promise<UserProps> {
    return new Promise<UserProps>((resolve, reject) => {
      try {
        resolve({} as UserProps);
      } catch (err) {
        reject(err);
      }
    });
  }

  save(param: unknown): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        resolve();
      } catch {
        reject();
      }
    });
  }
}
