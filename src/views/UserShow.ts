import { User, UserProps } from '../models/User';

import { UserViewProps } from './UserList';
import { View } from '../../module/View';

export class UserShow extends View<User, UserProps, UserViewProps> {
  // displayHeader: boolean = true;

  protected template(): string {
    return `
      <div>
        ${this.props?.displayHeader ? `<h1 class="title">User Detail</h1>` : ''}
        <div>ID: ${this.model.get('id')}</div>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
