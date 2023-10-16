import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { format } from 'date-fns';
import TaskCounter from '../taskCounter/TaskCounter';
import Task from '../task/Task';

const TaskArea: React.FC = (): React.ReactElement => {
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
          <TaskCounter></TaskCounter>
          <TaskCounter></TaskCounter>
          <TaskCounter></TaskCounter>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection="column"
          xs={12}
          md={8}
        >
          <Task></Task>
          <Task></Task>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskArea;
