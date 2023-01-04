export interface ITaskCreateModel {
  Title: string | null;
  Description?: string | null;
  Subtasks: ISubtaskCreateModel[]
  Status: string | null
}

export interface ISubtaskCreateModel {
  Title: string
}