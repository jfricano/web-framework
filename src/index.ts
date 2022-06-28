import { ApiSync, Collection, Eventing, User, UserProps } from './models';
import { UserEdit, UserList } from './views';

const root = document.getElementById('root');
if (root) {
  const allUsers = User.buildUserCollection();

  allUsers.fetch().then(() => {
    const viewAllUsers = new UserList(allUsers, root);
    viewAllUsers.render();
    console.log(allUsers, viewAllUsers);
  });

  // UserList.buildUserList(root).render();
} else throw new Error('root element not found');
