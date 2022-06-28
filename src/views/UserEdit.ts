import { RegionsMap, View } from './View';
import { User, UserProps } from '../models';

import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<
  User,
  UserProps,
  { displayHeader: boolean }
> {
  protected regionsMap(): RegionsMap {
    return {
      userShow: '.user-show',
      userForm: '.user-form',
    };
  }

  protected onRender(): void {
    new UserShow(this.regions.userShow, this.model, this.props).render();
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
