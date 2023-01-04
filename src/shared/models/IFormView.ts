export interface IFormView<T> {
  onSubmit: (data: T) => void;
}