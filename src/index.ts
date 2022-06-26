import { User } from './models/User';

const user = new User({ name: 'new record', age: 999 });
// user.save();
// console.log(user.get('id'));
// console.log(user.get('name'));
// console.log(user.get('age'));

user.on('change', () => console.log('changed!!'));
user.set({ name: 'updated NAME' });
