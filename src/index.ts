import { User } from './models/User';

const user = new User({ age: 41, name: 'jason' });

console.log(user.get('age'));
console.log(user.get('name'));
