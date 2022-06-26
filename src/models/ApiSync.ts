import axios from 'axios';
import { HasId, FetchFunc, SaveFunc, Sync } from './Model';

export class ApiSync<T extends HasId> implements Sync<T> {
  constructor(public rootUrl: string) {}

  fetch: FetchFunc = (id: number) => axios.get(`${this.rootUrl}/${id}`);

  save: SaveFunc<T> = (data) => {
    const { id } = data;

    if (id) return axios.put(`${this.rootUrl}/${id}`, data);
    else return axios.post(this.rootUrl, data);
  };
}
