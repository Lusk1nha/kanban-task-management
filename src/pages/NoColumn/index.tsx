import { Container, Text, AddColumnButton } from "./style";

export function NoColumn() {
  return (
    <Container>
      <Text title="This board is empty. Create a new column to get started." aria-label="This board is empty. Create a new column to get started.">
        This board is empty. Create a new column to get started.
      </Text>

      <AddColumnButton title="Add more column to Board" aria-label="Add more column to Board">
        + Add New Column
      </AddColumnButton>
    </Container>
  )
}