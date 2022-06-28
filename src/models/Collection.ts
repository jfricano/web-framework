import { Events, Sync } from './Model';

export class Collection<T, K> {
  models: T[] = [];

  constructor(
    private sync: Sync<K>,
    private events: Events,
    private deserialize: (json: K) => T
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;

  async fetch(): Promise<void> {
    const data = await this.sync.fetchAll();
    data.forEach((el) => {
      this.models.push(this.deserialize(el));
    });
  }
}
