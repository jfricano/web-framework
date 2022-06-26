import { AxiosPromise } from 'axios';

/**
 * Model Attributes
 */
export type AttrGetter<T> = <K extends keyof T>(key: K) => T[K];
export type AttrSetter<T> = (update: T) => void;
export type AllAttrGetter<T> = () => T;

export interface ModelAttributes<T> {
  get: AttrGetter<T>;
  getAll: AllAttrGetter<T>;
  set: AttrSetter<T>;
}

/**
 * Events
 */
export type EventCallback = (error?: Error) => void;
export interface EventRegistry {
  [eventName: string]: EventCallback[];
}
export type ListenerFunc = (eventName: string, callback: EventCallback) => void;
export type TriggerFunc = (eventName: string, error?: Error) => void;

export interface Events {
  on: ListenerFunc;
  trigger: TriggerFunc;
}

/**
 * Sync
 */
export type FetchFunc = (identifier: any) => AxiosPromise;
export type SaveFunc<T> = (data: T) => AxiosPromise;

export interface Sync<T extends HasId> {
  fetch: FetchFunc;
  save: SaveFunc<T>;
}

/**
 * Model
 */
export interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  get = this.attributes.get;
  on = this.events.on;
  trigger = this.events.trigger;

  set(update: T): void {
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
