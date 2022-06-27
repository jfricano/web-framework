import { User } from './models';
import { UserForm } from './views/UserForm';

const f = new UserForm(
  document.getElementById('root') as Element,
  User.buildUser({ name: 'NAME', age: 20 })
);
f.render();
