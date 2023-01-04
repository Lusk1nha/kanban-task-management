import { ITaskCreateModel } from "../../../../shared/repositories/ITaskCreateModel";
import { Logic } from "../Logic";
import { View } from "../View";

export default function Form() {
  // const { isLoading, data } = 

  async function handleSubmit(data: ITaskCreateModel): Promise<Response | void> {
    const uri = ""

    try {
      
      return
    } catch (error) {
      throw error
    }
  }

  const defaultValues: ITaskCreateModel = {
    Title: null,
    Description: null,
    Subtasks: [],
    Status: 'TODO'
  }

  return (
    <Logic defaultValues={defaultValues} onSubmit={handleSubmit}>
      <View />
    </Logic>
  )
}