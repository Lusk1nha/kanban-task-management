import { Options } from '../../../../components/Buttons/components';
import { Dropdown } from '../../../../components/Dropdown';
import { IButton } from '../../../../shared/models/IButton';
import { IOption } from '../../../../shared/models/IOption';
import { SubtaskRender } from '../../../SubtaskRender';
import { Container, Header, Title, Main, Description, SectionName, Wrapper, Footer } from './style';

const StatusOptions = [
  {
    text: 'Todo',
    value: 'Todo',
  },
  {
    text: 'Doing',
    value: 'Doing',
  },
  {
    text: 'Done',
    value: 'Done',
  },
] as IOption[]

const ButtonsOptions = [
  { text: 'Edit Task', title: 'Edit Task', "aria-label": 'Edit Task', type: 'button' },
  { text: 'Delete Task', variant: 'delete', title: 'Delete Task', "aria-label": 'Delete Task', type: 'button' },
] as IButton[]

export function TaskView() {
  return (
    <Container>
      <Header>
        <Title>Research pricing points of various competitors and trial different business models </Title>
        <Options buttons={ButtonsOptions} />
      </Header>

      <Main>
        <Description>
          We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
        </Description>

        <Wrapper>
          <SectionName>Subtasks (2 of 3)</SectionName>
          <SubtaskRender subtasks={[
            {
              "title": "Research competitor pricing and business models",
              "isCompleted": true
            },
            {
              "title": "Outline a business model that works for our solution",
              "isCompleted": true
            },
            {
              "title": "Talk to potential customers about our proposed solution and ask for fair price expectancy",
              "isCompleted": false
            }
          ]} />
        </Wrapper>
      </Main>

      <Footer>
        <SectionName>Current Status</SectionName>
        <Dropdown options={StatusOptions} defaultValue={'Doing'} />
      </Footer>
    </Container>
  )
}