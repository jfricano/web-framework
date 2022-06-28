import { User, UserProps } from '../models';

import { CollectionView } from './CollectionView';
import { UserEdit } from './UserEdit';

export class UserList extends CollectionView<User, UserProps> {
  static async buildUserList(root: Element): Promise<UserList> {
    const allUsers = User.buildUserCollection();
    await allUsers.fetch();

    return new UserList(allUsers, root);
  }

  protected renderItem(user: User, itemParent: Element) {
    const display = new UserEdit(itemParent, user, {
      displayHeader: user.get('id') === 1,
    });
    display.render();
  }

  render(): void {
    this.collection.models.forEach((model) => {
      const parent = document.createElement('div');
      parent.style.marginBottom = '20px';
      this.root.appendChild(parent);
      this.renderItem(model, parent);
    });
  }
}
