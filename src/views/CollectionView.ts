import { Collection, Model } from '../models';

export abstract class CollectionView<TModel extends Model<TData>, TData> {
  constructor(
    protected collection: Collection<TModel, TData>,
    protected root: Element
  ) {}

  protected abstract renderItem(model: TModel, itemParent: Element): void;

  render(): void {
    this.collection.models.forEach((model) => {
      const parent = document.createElement('div');
      this.root.appendChild(parent);
      this.renderItem(model, parent);
    });
  }
}
