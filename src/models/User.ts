interface UserProps {
  name?: string;
  age?: number;
}

export class User {
  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
    return;
  }

  on(eventName: string, callback: () => {}): void {
    return;
  }

  trigger(eventName: string): void {
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
