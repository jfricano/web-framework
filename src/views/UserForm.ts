import { EventCallback, EventsMap, View } from '../../module/View';
import { User, UserProps } from '../models/User';

export class UserForm extends View<User, UserProps> {
  private onSetAgeClick: EventCallback = () => {
    this.model.setRandomAge();
  };

  private onSetNameClick: EventCallback = () => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  private onSaveClick: EventCallback = () => {
    this.model.save();
  };

  protected eventsMap(): EventsMap {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  protected template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}" />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="save-model">Save User</button>
      </div>
    `;
  }
}
