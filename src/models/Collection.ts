import { Events, Sync } from './Model';

export class Collection<TModel, TData> {
  models: TModel[] = [];
  // events: Eventing = new Eventing();

  constructor(
    private sync: Sync<TData>,
    private events: Events,
    private deserialize: (json: TData) => TModel
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
