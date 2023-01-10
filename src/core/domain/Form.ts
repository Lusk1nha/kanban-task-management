export abstract class Form<T> {
  protected _name: string;
  public props: T;

  constructor(props: T, name: string) {
    this.props = props
    this._name = name
  }
}