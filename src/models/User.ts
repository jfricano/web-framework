import { Model } from './Model';
import { Eventing } from './Eventing';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';

const ROOT_URL = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser = (attributes: UserProps) => {
    return new User(
      new Attributes(attributes),
      new Eventing(),
      new ApiSync(ROOT_URL)
    );
  };
}
