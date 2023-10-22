import { TaskType } from '../../../api/types';
import { TaskCounterStatusType } from '../../taskCounter/interfaces/ITaskCounter';

export const countTasks = (
  tasks: TaskType[],
  status: TaskCounterStatusType,
): number => {
  return tasks.reduce((sum, currentValue) => {
    if (currentValue.status === status) {
      return ++sum;
    }
    return sum;
  }, 0);
};
