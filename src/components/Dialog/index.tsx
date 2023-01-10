
import { CancelButton, Container, DeleteButton, Description, Title, Wrapper } from './style';


interface IDialog {
  title: string;
  description: string;
  deleteButton: string;
  cancelButton: string;
}

export function Dialog({ title, description, deleteButton, cancelButton }: IDialog) {

  return (
    <Container>
      <Title>{title}</Title>

      <Description>
        {description}
      </Description>

      <Wrapper>
        <DeleteButton type="button">
          {deleteButton}
        </DeleteButton>

        <CancelButton type="button">
          {cancelButton}
        </CancelButton>
      </Wrapper>
    </Container>
  )
}