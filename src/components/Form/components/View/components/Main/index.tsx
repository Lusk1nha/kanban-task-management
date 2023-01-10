import { IMainProps, MainComponent } from "../../../../model/props";
import { Container, Custom } from "./style";
import { TextField } from './../../../../../Inputs/TextField/index';
import { ItemsRender } from "../../../../../Inputs/ItemsRender";
import { Dropdown } from "../../../../../Dropdown";
import { Checklist } from "../../../../../Inputs/Checklist";
import { useFormContext } from "react-hook-form";

export function Main({ components, disable }: IMainProps) {
  const {
    control,
    register
  } = useFormContext()

  const switchComponent = ({ type, parameters }: MainComponent, id: number) => {
    switch (type) {
      case 'TextField':
        return <TextField key={id} register={register} {...parameters} />

      case 'ItemsRender':
        return <ItemsRender key={id} control={control} {...parameters} />

      case 'Dropdown':
        return <Dropdown key={id} {...parameters} />

      case 'Checklist':
        return <Checklist key={id} {...parameters} />

      case 'Custom':
        return <Custom key={id}>{parameters.children}</Custom>
    }
  }

  return (
    <Container>
      {components.map((component, id) => {
        return (
          switchComponent(component, id)
        )
      })}
    </Container>
  )
}