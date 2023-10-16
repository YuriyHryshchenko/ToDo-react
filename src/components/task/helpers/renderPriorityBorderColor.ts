import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (
  priority: string,
): string => {
  switch (priority) {
    case Priority.low:
      return 'grey.900';
    case Priority.normal:
      return 'info.light';
    case Priority.high:
      return 'error.light';
    default:
      return 'grey.900';
  }
};
