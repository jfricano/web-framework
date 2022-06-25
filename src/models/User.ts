import axios from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type Callback = () => void;

interface EventRegistry {
  [eventName: string]: Callback[];
}

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

  async fetch(): Promise<void> {
    const response = await axios.get<UserProps>(
      `http://localhost:3000/users/${this.get('id')}`
    );
    this.set(response.data);
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
