import axios, { AxiosPromise } from 'axios';

export interface HasId {
  id?: number;
}

export type FetchFunc<T> = (id: number) => AxiosPromise<T>;
export type SaveFunc<T> = (data: T) => AxiosPromise<T>;

export class Sync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch: FetchFunc<T> = (id) => axios.get(`${this.rootUrl}/${id}`);

  save: SaveFunc<T> = (data) => {
    const { id } = data;

    if (id) return axios.put(`${this.rootUrl}/${id}`, data);
    else return axios.post(this.rootUrl, data);
  };
}
