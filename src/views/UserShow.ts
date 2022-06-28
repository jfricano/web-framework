import { User, UserProps } from '../models';

import { View } from './View';

export class UserShow extends View<User, UserProps> {
  template() {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
      </div>
    `;
  }
}
