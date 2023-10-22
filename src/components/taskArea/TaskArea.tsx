import React from 'react';
import {
  Alert,
  Box,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/TaskCounter';
import {
  useAppDispatch,
  useAppSelector,
} from '../../hooks/hooks';
import { LoadingStatus } from '../../models/tasks/types';
import { Status } from '../createTaskForm/enums/Status';
import Task from '../task/Task';
import { updateTaskAsyncAction } from '../../models/tasks/asyncActions/asyncActions';
import { countTasks } from './helpers/countTasks';

const TaskArea: React.FC = (): React.ReactElement => {
  const tasks = useAppSelector((state) => state.tasks);

  const dispatch = useAppDispatch();
  const onStatusChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
  ) => {
    dispatch(
      updateTaskAsyncAction({
        id,
        status: e.target.checked
          ? Status.inProgress
          : Status.todo,
      }),
    );
  };

  const onClickHandler = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    dispatch(
      updateTaskAsyncAction({
        id,
        status: Status.completed,
      }),
    );
  };

  return (
    <Grid item sm={6} md={8} xs={12} px={4}>
      <Box
        mb={8}
        mt={4}
        sx={{
          px: {
            md: 4,
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontSize: {
              xs: '16px',
              sm: '16px',
              md: '20px',
            },
          }}
        >
          Status of Your Tasks As On{' '}
          {format(new Date(), 'PPPP')}
        </Typography>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="center"
      >
        <Grid
          item
          display="flex"
          justifyContent="space-around"
          md={10}
          xs={12}
          mb={8}
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
            gap: {
              xs: '20px',
              md: 0,
            },
          }}
        >
          <TaskCounter
            status={Status.todo}
            count={
              tasks.tasks
                ? countTasks(tasks.tasks, Status.todo)
                : undefined
            }
          />
          <TaskCounter
            status={Status.inProgress}
            count={
              tasks.tasks
                ? countTasks(tasks.tasks, Status.inProgress)
                : undefined
            }
          />
          <TaskCounter
            status={Status.completed}
            count={
              tasks.tasks
                ? countTasks(tasks.tasks, Status.completed)
                : undefined
            }
          />
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          alignItems="center"
          xs={12}
          md={8}
        >
          {tasks.fetchingTasks === LoadingStatus.failed && (
            <Alert
              severity="error"
              sx={{
                marginBottom: '16px',
              }}
            >
              There was an error fetching your tasks
            </Alert>
          )}
          {tasks.fetchingTasks ===
            LoadingStatus.succeeded &&
            tasks.tasks.length === 0 && (
              <Alert
                severity="warning"
                sx={{
                  marginBottom: '16px',
                }}
              >
                You don`t have any tasks created yet. Start
                by creating some tasks
              </Alert>
            )}
          {tasks.fetchingTasks ===
            LoadingStatus.pending && (
            <CircularProgress
              sx={{
                marginBottom: '16px',
              }}
              size={80}
            />
          )}
          {tasks.fetchingTasks ===
            LoadingStatus.succeeded &&
            tasks.tasks.length > 0 &&
            tasks.tasks.map((task) => {
              return (
                task.status !== Status.completed && (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    date={new Date(task.date)}
                    description={task.description}
                    priority={task.priority}
                    status={task.status}
                    onChange={onStatusChangeHandler}
                    onClick={onClickHandler}
                  />
                )
              );
            })}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
