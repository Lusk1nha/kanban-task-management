export interface IFormLogic<T> {
  children: React.ReactNode;
  defaultValues: T;
  onSubmit: (data: T) => Promise<Response | void>;
}