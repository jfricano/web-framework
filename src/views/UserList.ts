import { User, UserProps } from '../models';

import { CollectionView } from './CollectionView';
import { UserEdit } from './UserEdit';

export interface UserViewProps {
  displayHeader: boolean;
}

export class UserList extends CollectionView<User, UserProps> {
  static async buildUserList(root: HTMLElement): Promise<UserList> {
    const allUsers = User.buildUserCollection();
    await allUsers.fetch();

    return new UserList(allUsers, root);
  }

  protected renderItem(user: User, itemParent: HTMLElement) {
    new UserEdit(itemParent, user, {
      displayHeader: user.get('id') === 1,
    }).render();

    itemParent.style.marginBottom = '20px';
  }
}
