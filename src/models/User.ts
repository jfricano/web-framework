import { ApiSync, Attributes, Collection, Eventing, Model } from '../../module';

const ROOT_URL = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes(attrs),
      new Eventing(),
      new ApiSync(ROOT_URL)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(
      new ApiSync(ROOT_URL),
      new Eventing(),
      (json: UserProps) => User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.ceil(Math.random() * 100);
    this.set({ age });
  }
}
