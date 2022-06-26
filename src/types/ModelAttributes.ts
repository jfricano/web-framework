type AttrGetter<T> = <K extends keyof T>(key: K) => T[K];
type AttrSetter<T> = (update: T) => void;
type AllAttrGetter<T> = () => T;

export interface ModelAttributes<T> {
  set: AttrSetter<T>;
  get: AttrGetter<T>;
  getAll: AllAttrGetter<T>;
}
