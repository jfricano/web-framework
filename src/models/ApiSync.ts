import axios, { AxiosPromise } from 'axios';

export interface HasId {
  id?: number;
}

type FetchFunc<T> = (id: number) => AxiosPromise<T | void>;
type SaveFunc<T> = (data: T) => AxiosPromise<T>;

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch: FetchFunc<T> = (id: number): AxiosPromise =>
    axios.get(`${this.rootUrl}/${id}`);

  save: SaveFunc<T> = (data: T): AxiosPromise => {
    const { id } = data;

    if (id) return axios.put(`${this.rootUrl}/${id}`, data);
    else return axios.post(this.rootUrl, data);
  };
}
