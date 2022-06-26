import { Eventing, ListenerFunc, TriggerFunc } from './Eventing';
import { Sync } from './Sync';
import { Attributes, AttrGetter, AttrSetter } from './Attributes';

const rootUrl = 'http://localhost:3000/users';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

type UserGetter = AttrGetter<UserProps>;

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attributes(attrs);
  }

  get get(): UserGetter {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  get on(): ListenerFunc {
    return this.events.on;
  }

  get trigger(): TriggerFunc {
    return this.events.trigger;
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') throw new Error('cannot fetch without an id');
    this.sync.fetch(id).then((response) => this.set(response.data));
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(() => this.trigger('save'))
      .catch((err) => this.trigger('error', err));
  }
}
