import { Collection, Model } from '../models';

import { View } from './View';

export abstract class CollectionView<TModel extends Model<TData>, TData> {
  constructor(public collection: Collection<View<TModel, TData>, TData>) {}

  protected abstract renderItem(model: Model<TData>, itemParent: Element): void;

  render(): void {
    this.collection.collectibles.forEach((view) => {
      this.renderItem(view.model, view.parent);
    });
  }
}
