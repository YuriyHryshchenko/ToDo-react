import React, { useEffect, useState } from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  Button,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import TaskTitleField from './TaskTitleField';
import TaskDescriptionField from './TaskDescriptionField';
import TaskDateField from './TaskDateField';
import TaskSelectField from './TaskSelectField';
import { Status } from './enums/Status';
import { Priority } from './enums/Priority';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/hooks';
import { postTaskAsyncAction } from '../../models/tasks/asyncActions/asyncActions';
import { LoadingStatus } from '../../models/tasks/types';

const CreateTaskForm: React.FC = (): React.ReactElement => {
  const [title, setTitle] = useState<string | undefined>(
    undefined,
  );

  const [description, setDescription] = useState<
    string | undefined
  >(undefined);

  const [date, setDate] = useState<Date | null>(new Date());

  const [status, setStatus] = useState<string>(Status.todo);

  const [priority, setPriority] = useState<string>(
    Priority.normal,
  );

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(
    (state) => state.tasks.addingTasks,
  );

  useEffect(() => {
    if (isLoading === LoadingStatus.succeeded) {
      setShowSuccess(true);
    } else if (isLoading === LoadingStatus.failed) {
      setShowError(true);
    }

    const successTimeout = setTimeout(() => {
      setShowSuccess(false);
    }, 7000);

    const errorTimeout = setTimeout(() => {
      setShowError(false);
    }, 7000);

    return () => {
      clearTimeout(successTimeout);
      clearTimeout(errorTimeout);
    };
  }, [isLoading]);

  const createTaskHandler = () => {
    if (!title || !description || !date) {
      return;
    }
    const task = {
      title,
      description,
      date: date.toString(),
      status,
      priority,
    };

    dispatch(postTaskAsyncAction(task));
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      width="100%"
      px={4}
      my={6}
    >
      {showSuccess && (
        <Alert
          severity="success"
          sx={{ width: '100%', marginBottom: '16px' }}
        >
          <AlertTitle>Success</AlertTitle>
          The task has been created successfully
        </Alert>
      )}
      {showError && (
        <Alert
          severity="error"
          sx={{ width: '100%', marginBottom: '16px' }}
        >
          <AlertTitle>Error</AlertTitle>
          The error occurred during adding the task
        </Alert>
      )}
      <Typography mb={2} variant="h6" component="h2">
        Create A Task
      </Typography>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <TaskTitleField
          disabled={isLoading === LoadingStatus.pending}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TaskDescriptionField
          disabled={isLoading === LoadingStatus.pending}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          date={date}
          disabled={isLoading === LoadingStatus.pending}
          onChange={(date) => setDate(date)}
        />
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: '100%' }}
        >
          <TaskSelectField
            label="Status"
            name="status"
            disabled={isLoading === LoadingStatus.pending}
            value={status}
            onChange={(e) =>
              setStatus(e.target.value as string)
            }
            items={[
              {
                value: Status.todo,
                label: Status.todo.toUpperCase(),
              },
              {
                value: Status.inProgress,
                label: Status.inProgress.toUpperCase(),
              },
            ]}
          />
          <TaskSelectField
            label="Priority"
            name="priority"
            disabled={isLoading === LoadingStatus.pending}
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as string)
            }
            items={[
              {
                value: Priority.low,
                label: Priority.low,
              },
              {
                value: Priority.normal,
                label: Priority.normal,
              },
              {
                value: Priority.high,
                label: Priority.high,
              },
            ]}
          />
        </Stack>
        {isLoading === LoadingStatus.pending && (
          <LinearProgress />
        )}
        <Button
          disabled={
            !title ||
            !description ||
            !date ||
            !status ||
            !priority ||
            isLoading === LoadingStatus.pending
          }
          onClick={createTaskHandler}
          variant="contained"
          size="large"
          fullWidth
        >
          Create Task
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateTaskForm;
