export type AttrGetter<T> = <K extends keyof T>(key: K) => T[K];
export type AttrSetter<T> = (update: T) => void;
export type AllAttrGetter<T> = () => T;

export class Attributes<T> {
  constructor(private data: T) {}

  get: AttrGetter<T> = (key) => this.data[key];

  getAll: AllAttrGetter<T> = () => this.data;

  set: AttrSetter<T> = (update) => (this.data = { ...this.data, ...update });
}
