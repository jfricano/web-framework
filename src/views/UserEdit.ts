import { User, UserProps } from '../models';

import { RegionsMap, View } from './View';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): RegionsMap {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  template() {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
