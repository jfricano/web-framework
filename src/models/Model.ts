import { ModelAttributes, Events, Sync } from '../types';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: Attributes<T>,
    private events: Eventing,
    private sync: Sync<T>
  ) {}

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(update: T) {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id');

    if (typeof id !== 'number') throw new Error('cannot fetch without an id');
    this.sync
      .fetch(id)
      .then((response) => this.set(response.data))
      .catch((err) => this.trigger('error', err));
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(() => this.trigger('save'))
      .catch((err) => this.trigger('error', err));
  }
}
