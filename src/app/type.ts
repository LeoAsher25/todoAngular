export interface ITodo {
  id: string;
  name: string;
  isCompleted: boolean;
  deadline: Date | null;
}

export enum EDialogType {
  ADD,
  EDIT,
  VIEW,
}

export enum ETodoFilter {
  All = 'All',
  Active = 'Active',
  Completed = 'Completed',
}
