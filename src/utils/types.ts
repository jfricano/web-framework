export type OptionalExceptFor<T, TRequired extends keyof T> = Partial<
  Omit<T, TRequired>
> &
  Required<Pick<T, TRequired>>;
