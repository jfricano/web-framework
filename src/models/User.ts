interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

type EventRegistry = { [eventName: string]: Callback[] };

export class User {
  private events: EventRegistry;

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
    return;
  }

  on(eventName: string, callback: Callback): void {
    return;
  }

  trigger(eventName: keyof EventRegistry): void {
    return;
  }

  fetch(param: unknown): Promise<UserProps> {
    return new Promise<UserProps>((resolve, reject) => {
      try {
        return resolve({} as UserProps);
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
