import { ModelAttributes } from './Model';

export class Attributes<T> implements ModelAttributes<T> {
  constructor(private data: T) {}

  get = <K extends keyof T>(key: K) => this.data[key];

  getAll = () => this.data;

  set = (update: T) => (this.data = { ...this.data, ...update });
}
