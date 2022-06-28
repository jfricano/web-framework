import { ApiSync, Collection, Eventing, User, UserProps } from './models';
import { UserEdit, UserList } from './views';

const root = document.getElementById('root');
if (root) {
  UserList.buildUserList(root).then((response) => {
    response.render();
  });
} else throw new Error('root element not found');
