import { User } from './models/User';

// const user = new User({ name: 'new record', age: 999 });
const user = new User({ id: 1 });
// user.save();
// console.log(user.get('id'));
// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => console.log('change!', user));
user.set({ name: 'updated NAME' });
user.save();
// user.fetch();
