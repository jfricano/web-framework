import { AxiosPromise } from 'axios';

type FetchFunc = (identifier: any) => AxiosPromise;
type SaveFunc<T> = (data: T) => AxiosPromise;

export interface Sync<T> {
  fetch: FetchFunc;
  save: SaveFunc<T>;
}
