import { User, UserProps } from '../models';

import { View } from './View';

export class UserShow extends View<
  User,
  UserProps,
  { displayHeader: boolean }
> {
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
