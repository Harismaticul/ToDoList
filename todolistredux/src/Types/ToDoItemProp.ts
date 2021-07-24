export interface ToDoDataProp {
  todoitemid: string;
  state: ToDoState;
  description: string;
  created: string;
  isSelectedForDelete: boolean;
}

export enum ToDoState {
  NOT_STARTED = "Not started",
  STARTED = "Started",
  DONE = "Done",
}

export interface IServerToDoData {
  id: number;
  description: string;
  createdAt: string;
  state: number;
}
