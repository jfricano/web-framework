import { CollectionView } from './CollectionView';
import { Model } from '../models';

export class UserList<
  TModel extends Model<TData>,
  TData
> extends CollectionView<TModel, TData> {
  protected renderItem() {}
}
