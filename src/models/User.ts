import { Eventing } from './Eventing';
export const USER_URL = 'http://localhost:3000/users';
export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }
}
