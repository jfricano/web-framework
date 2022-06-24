import { User } from './models/User';

const user = new User({});
// const user = new User({ age: 41, name: 'jason' });

console.log(user.get('age'));
console.log(user.get('name'));

user.set({ age: 42 });
user.set({ name: 'jasonjpf' });

console.log(user.get('age'));
console.log(user.get('name'));
