import { TaskType } from '../../api/types';

export type TaskInitialStateType = {
  tasks: TaskType[];
  fetchingTasks: LoadingStatusType;
  addingTasks: LoadingStatusType;
  updatingTasks: LoadingStatusType;
  error: string | undefined;
};

export enum LoadingStatus {
  idle = 'idle',
  pending = 'pending',
  succeeded = 'succeeded',
  failed = 'failed',
}

export type LoadingStatusType =
  | LoadingStatus.idle
  | LoadingStatus.pending
  | LoadingStatus.succeeded
  | LoadingStatus.failed;

export type UpdateTaskOtionsType = {
  id: string;
  status: string;
};
