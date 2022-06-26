import {
  ModelAttributes,
  AttrGetter,
  AttrSetter,
  AllAttrGetter,
} from './Model';

export class Attributes<T> implements ModelAttributes<T> {
  constructor(private data: T) {}

  get: AttrGetter<T> = (key) => this.data[key];

  getAll: AllAttrGetter<T> = () => this.data;

  set: AttrSetter<T> = (update) => (this.data = { ...this.data, ...update });
}
