import { Model } from './Model';
import { Collection } from './Collection';

export abstract class CollectionView<TModel extends Model<TData>, TData> {
  constructor(
    protected collection: Collection<TModel, TData>,
    protected root: HTMLElement
  ) {}

  protected abstract renderItem(model: TModel, itemParent: HTMLElement): void;

  render(): void {
    this.root.innerHTML = '';

    // FIXME FIRST APPEND TO A TEMPLATE ELEMENT HERE??
    this.collection.models.forEach((model) => {
      const itemParent = document.createElement('div');
      this.root.appendChild(itemParent);
      this.renderItem(model, itemParent);
    });
  }
}
