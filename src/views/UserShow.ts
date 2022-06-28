import { User, UserProps } from '../models';

import { View } from './View';

export class UserShow extends View<User, UserProps> {
  protected template(): string {
    return `
      <div>
        <h1 class="title">User Detail</h1>
        <div>ID: ${this.model.get('id')}</div>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
