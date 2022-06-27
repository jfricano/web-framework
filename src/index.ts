import { User } from './models';
import { UserForm } from './views';

const root = document.getElementById('root');
if (root) {
  const f = new UserForm(root, User.buildUser({ name: 'NAME', age: 20 }));
  f.render();
} else throw new Error('root element not found');
