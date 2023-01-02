import { IOptionsRenderProps } from "./IOptionsRenderProps";
import { Container } from "./style";

import { Option } from "../Option";

export function OptionsRender({ options }: IOptionsRenderProps) {

  return (
    <Container>
      {
        options?.map((option, id) => {
          return (
            <Option key={id} {...option} />
          )
        })
      }
    </Container>
  )
}