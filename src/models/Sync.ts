import { User, UserProps } from './User';
import axios, { AxiosPromise } from 'axios';

export class Sync<T extends UserProps> {
  constructor(public rootUrl: string, private user: User) {}

  fetch(id: number): AxiosPromise<T> {
    return axios.get(`${this.rootUrl}/${id}`);
    // this.user.set(response.data);
  }

  save(data: T): AxiosPromise<T> {
    const { id } = data;

    if (id) return axios.put(`${this.rootUrl}/${id}`, data);
    else return axios.post(this.rootUrl, data);
  }
}
