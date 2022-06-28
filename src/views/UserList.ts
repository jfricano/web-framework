import { Collection, User, UserProps } from '../models';

import { CollectionView } from './CollectionView';
import { UserEdit } from './UserEdit';

export class UserList extends CollectionView<User, UserProps> {
  // static buildUserList(parent: Element): UserList {
  //   const allUsers = User.buildUserCollection();
  //   void allUsers.fetch();

  //   return new UserList(allUsers, parent);
  // }

  protected renderItem(user: User, itemParent: Element) {
    const display = new UserEdit(itemParent, user);
    display.render();
    if (user.get('id') !== 1) {
      const header = itemParent.querySelector('h1');
      if (header) header.style.display = 'none';
    }
  }
}
