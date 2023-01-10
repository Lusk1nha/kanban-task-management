import { IOptionsRenderProps } from "./IOptionsRenderProps";
import { Container } from "./style";

import { Option } from "../Option";

export function OptionsRender({ name, options }: IOptionsRenderProps) {
  return (
    <Container>
      {
        options?.map((option, id) => {
          return (
            <Option key={option + id} name={name} text={option} />
          )
        })
      }
    </Container>
  )
}