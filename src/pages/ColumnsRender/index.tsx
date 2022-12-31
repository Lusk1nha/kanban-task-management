import { Column } from "../Column";
import { Container, CreateColumnContainer, CreateColumnPanel } from "./style";

interface ColumnsRenderProps {
  columns: any[]
}

export function ColumnsRender({ columns }: ColumnsRenderProps) {
  return (
    <Container>
      {columns?.map((column, id) => {
        return (
          <Column key={id} index={id} {...column} />
        )
      })}
      <CreateColumnContainer>
        <CreateColumnPanel type="button" title="Create a new column" aria-label="Create new column">
          + New Column
        </CreateColumnPanel>
      </CreateColumnContainer>
    </Container>
  )
}