// import axios from 'axios';

// axios.get('http://localhost:3000/users/1', {});

import { User } from './models/User';

const user = new User({ id: 1 });
user.fetch();
// // const user = new User({ age: 41, name: 'jason' });

// // setter and getter
// console.log(user.get('age'));
// console.log(user.get('name'));

// user.set({ age: 42 });
// user.set({ name: 'jasonjpf' });

// console.log(user.get('age'));
// console.log(user.get('name'));

// // eventing
// user.on('change', () => {
//   console.log('change 1');
// });
// user.on('change', () => {
//   console.log('change 2');
// });
// user.on('save', () => {
//   console.log('saved');
// });
// try {
//   user.trigger('log');
// } catch (e) {
//   console.error(e.message);
// }
// user.trigger('change');
// user.trigger('save');
