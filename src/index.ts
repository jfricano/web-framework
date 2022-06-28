import { User } from './models';
import { UserEdit } from './views';

const root = document.getElementById('root');
if (root) {
  const f = new UserEdit(root, User.buildUser({ name: 'NAME', age: 20 }));
  f.render();
  console.log(f);
} else throw new Error('root element not found');
