import { User } from './models/User';

const user = new User({});
// const user = new User({ age: 41, name: 'jason' });

console.log(user.get('age'));
console.log(user.get('name'));

user.set({ age: 42 });
user.set({ name: 'jasonjpf' });

console.log(user.get('age'));
console.log(user.get('name'));

user.on('change', () => {
  console.log('change 1');
});
user.on('change', () => {
  console.log('change 2');
});
user.on('save', () => {
  console.log('saved');
});

try {
  user.trigger('log');
} catch (e) {
  console.error(e.message);
}
user.trigger('change');
user.trigger('save');
