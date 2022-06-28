import { Collection, User, UserProps } from '../models';

import { CollectionView } from './CollectionView';
import { UserEdit } from './UserEdit';

export class UserList extends CollectionView<User, UserProps> {
  static async buildUserList(root: Element): Promise<UserList> {
    const allUsers = User.buildUserCollection();
    await allUsers.fetch();

    return new UserList(allUsers, root);
  }

  protected renderItem(user: User, itemParent: Element) {
    const display = new UserEdit(itemParent, user);
    display.render();
    if (user.get('id') !== 1) {
      const header = itemParent.querySelector('h1');
      if (header) header.style.display = 'none';
    }
  }
}
