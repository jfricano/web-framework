import { User, UserProps } from '../models';

import { UserForm } from './UserForm';
import { UserShow } from './UserShow';
import { RegionsMap, View } from './View';

export class UserEdit extends View<User, UserProps> {
  protected regionsMap(): RegionsMap {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  protected onRender(): void {
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  protected template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
