export type PostTaskType = Omit<TaskType, 'id'>;

export type PostTaskResponseType = TaskType;
export type UpdateTaskResponseType = TaskType;
export type GetTasksResponseType = TaskType[];

export type TaskType = {
  id: string;
  title: string;
  date: string;
  description: string;
  priority: string;
  status: string;
};
