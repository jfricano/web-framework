import { User } from './models';

const collection = User.buildUserCollection();
collection.on('change', () => console.log(collection));
collection.fetch();
