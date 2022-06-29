/**
 * Model Attributes
 */
export interface ModelAttributes<T> {
  get: <K extends keyof T>(key: K) => T[K];
  set: (update: T) => void;
  getAll: () => T;
}

/**
 * Events
 */
export type EventCallback = (error?: Error) => void;

export interface EventRegistry {
  [eventName: string]: EventCallback[];
}

export interface Events {
  on: (eventName: string, callback: EventCallback) => void;
  trigger: (eventName: string, error?: Error) => void;
}

/**
 * Sync
 */
type SyncResponse<T> = T | Promise<T>;

export interface Sync<T extends HasId> {
  fetch: (identifier: any) => SyncResponse<T>;
  save: (data: T) => SyncResponse<T>;
  fetchAll: () => SyncResponse<T[]>;
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

  async fetch(): Promise<void> {
    const id = this.attributes.get('id');
    if (typeof id !== 'number') throw new Error('cannot fetch without an id');

    try {
      const data = await this.sync.fetch(id);
      this.set(data);
    } catch {
      this.trigger('error');
    }
  }

  async save(): Promise<void> {
    try {
      const attrs = this.attributes.getAll();
      await this.sync.save(attrs);
    } catch {
      this.trigger('error');
    }
  }
}
