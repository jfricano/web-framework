import { User } from './models';

// const user = new User({ name: 'new record', age: 999 });
const user = User.buildUser({ id: 1 });
// user.save();
// console.log(user.get('id'));
// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => console.log('change!', user));
user.set({ name: 'opdated N0-0-00ME' });
user.save();
// user.fetch();
