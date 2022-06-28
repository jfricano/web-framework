import { Collection, Model } from '../models';

export abstract class CollectionView<TModel extends Model<TData>, TData> {
  constructor(
    protected collection: Collection<TModel, TData>,
    protected root: HTMLElement
  ) {}

  protected abstract renderItem(model: TModel, itemParent: HTMLElement): void;

  render(): void {
    this.collection.models.forEach((model) => {
      const parent = document.createElement('div');
      this.root.appendChild(parent);
      this.renderItem(model, parent);
    });
  }
}
