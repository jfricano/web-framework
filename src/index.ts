import { Collection, User, UserProps } from './models';

const collection = new Collection<User, UserProps>(
  'http://localhost:3000/users',
  (json) => User.buildUser(json)
);
collection.on('change', () => console.log(collection));
collection.fetch();
