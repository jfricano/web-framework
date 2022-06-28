import { Collection, Model } from '../models';

export abstract class CollectionView<TModel extends Model<TData>, TData> {
  constructor(
    private collection: Collection<TModel, TData>,
    private root: Element
  ) {}

  protected abstract renderItem(model: TModel, itemParent: Element): void;

  render(): void {
    this.collection.models.forEach((model) => {
      const parent = document.createElement('div');
      parent.style.marginBottom = '20px';
      this.root.appendChild(parent);
      this.renderItem(model, parent);
    });
  }
}
