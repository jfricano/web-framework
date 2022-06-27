import {
  AllAttrGetter,
  AttrGetter,
  AttrSetter,
  ModelAttributes,
} from './Model';

export class Attributes<T> implements ModelAttributes<T> {
  constructor(private data: T) {}

  get: AttrGetter<T> = <K extends keyof T>(key: K) => this.data[key];

  getAll: AllAttrGetter<T> = () => this.data;

  set: AttrSetter<T> = (update: T) => (this.data = { ...this.data, ...update });
}
