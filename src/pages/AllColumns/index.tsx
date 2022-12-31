import { Column } from "../Column";
import { Container } from "./style";

interface AllColumnsProps {
  columns: any[]
}

export function AllColumns({ columns }: AllColumnsProps) {
  return (
    <Container>
      {columns?.map((column, id) => {
        return (
          <Column key={id} index={id} {...column} />
        )
      })}
    </Container>
  )
}