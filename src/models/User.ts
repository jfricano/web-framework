import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { OptionalExceptFor } from '../utils/types';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(rootUrl);

  constructor(private data: UserProps) {}
}
