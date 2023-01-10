import { Form } from "../../core/domain/Form";

type BoardProps = {
  name: string;
}

export class Board extends Form<BoardProps> {
  constructor(props: BoardProps, name: string) {
    super(props, name)
  }

  public submit(props: BoardProps) {

  }
}