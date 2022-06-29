import { HasId, Sync } from './Model';

import axios from 'axios';

export class ApiSync<T extends HasId> implements Sync<T> {
  constructor(public rootUrl: string) {}

  fetch = async (id: number) => {
    return (await axios.get<T>(`${this.rootUrl}/${id}`)).data;
  };

  fetchAll = async () => {
    return (await axios.get<T[]>(this.rootUrl)).data;
  };

  save = async (data: T) => {
    const { id } = data;

    if (id) return (await axios.put(`${this.rootUrl}/${id}`, data)).data;
    else return (await axios.post(this.rootUrl, data)).data;
  };
}
