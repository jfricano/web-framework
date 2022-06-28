import { Collection } from '../models';

export abstract class Collectionview<TModel, TData> {
  collection: Collection<TModel, TData> = new Collection();

  abstract renderItem(model, itemParent);

  render(): void {}
}
