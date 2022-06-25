import axios from 'axios';

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  private static USER_URL = 'http://localhost:3000/users';

  constructor(private data: UserProps) {}

  get(propName: keyof UserProps): string | number | undefined {
    return this.data[propName];
  }

  set(update: UserProps): void {
    this.data = { ...this.data, ...update };
  }

  async fetch(): Promise<void> {
    const response = await axios.get<UserProps>(
      `${User.USER_URL}/${this.get('id')}`
    );
    this.set(response.data);
  }

  async save(): Promise<void> {
    const id = this.get('id');
    if (id) axios.put(`${User.USER_URL}/${id}`, this.data);
    else axios.post(User.USER_URL, this.data);
  }
}
