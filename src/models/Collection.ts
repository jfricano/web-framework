import { Eventing } from "./Eventing";
import axios from "axios";

export class Collection<TModel, TData> {
  models: TModel[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: TData) => TModel
  ) {}

  on = this.events.on;
  trigger = this.events.trigger;

  // test
  fetch(): void {
    axios.get(this.rootUrl).then((response) => {
      response.data.forEach((value: TData) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger("change");
    });
  }
}
