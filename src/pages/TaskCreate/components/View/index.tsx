import { TextField } from "../../../../components/Inputs/TextField";
import { Form, CreateTaskButton } from "../../style";
import { useContext, useState } from 'react';
import { FormContext } from './../../../../contexts/components/FormProvider/index';
import { ItemsRender } from "../../../../components/Inputs/ItemsRender";
import { Dropdown } from "../../../../components/Dropdown";
import { CurrentBoardContext } from "../../../../contexts/components/CurrentBoardContextProvider";
import { IColumn } from "../../../../shared/models/IColumn";
import { IOption } from "../../../../shared/models/IOption";

export function View() {
  const [statusDropdownOpen, setStatusDropdownOpen] = useState<boolean>(false)
  const [selectedStatus, setSelectedStatus] = useState<IOption | null>()

  const {
    onSubmit,
    handleSubmit,
    register
  } = useContext(FormContext)

  const currentBoard = useContext(CurrentBoardContext)
  const boardColumns = currentBoard?.board?.columns ?? []

  const currentStatusInOption = {
    text: 'TODO',
    value: 'TODO'
  } as IOption

  const onChangeStatus = (option: IOption): void => {
    setSelectedStatus(option)
  }

  const onClickInDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen)
  }

  const getAllColumns = (columns: IColumn[]): IOption[] => {
    return columns.map((column, id) => {
      return {
        id: id,
        text: column.name,
        value: column.name,
      } as IOption
    })
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TextField name="Title" label="Title" rows={1} placeholder="e.g. Take coffee break" register={register} />
      <TextField name="Description" label="Description" rows={4} placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little." register={register} />

      <ItemsRender
        label="Subtasks"
        newItemSchema={{
          Title: ''
        }}
      />

      <Dropdown
        name="Status"
        label="Status"
        on={statusDropdownOpen}
        selectedOption={selectedStatus ?? currentStatusInOption}
        onChange={onChangeStatus}
        onOpen={onClickInDropdown}
        options={getAllColumns(boardColumns)}
      />

      <CreateTaskButton type="submit">Create Task</CreateTaskButton>
    </Form>
  )
}