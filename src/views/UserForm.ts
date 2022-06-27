import { EventCallback, EventsMap, View } from './View';
import { User, UserProps } from '../models';

export class UserForm extends View<User, UserProps> {
  onSetAgeClick: EventCallback = () => {
    this.model.setRandomAge();
  };

  onSetNameClick: EventCallback = () => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  onSaveClick: EventCallback = () => {
    this.model.save();
  };

  eventsMap(): EventsMap {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveClick,
    };
  }

  template(): string {
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
