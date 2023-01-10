import { Options } from "../../../../../Buttons/components";
import { HeaderComponent, IHeaderProps } from "../../../../model/props";
import { Container, Title } from "./style";


export function Header({ components, disable }: IHeaderProps) {

  const switchComponent = ({ type, parameters }: HeaderComponent, id: number) => {
    switch (type) {
      case 'Title':
        return <Title key={id} {...parameters} />;

      case 'Options':
        return <Options key={id} {...parameters} />;
    }
  }

  return (
    disable
      ? null
      : (
        <Container>
          {components.map((component, id) => {
            return (
              switchComponent(component, id)
            )
          })}
        </Container>
      )
  )
}