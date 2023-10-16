import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/Status';
import { emitCorrectColor } from './helpers/emitCorrectColor';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';

const TaskCounter: React.FC<ITaskCounter> = (
  props,
): React.ReactElement => {
  const { status = Status.inProgress, count = 0 } = props;
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Avatar
        sx={{
          backgroundColor: 'transparent',
          border: '5px solid',
          width: '96px',
          height: '96px',
          marginBottom: '16px',
          borderColor: emitCorrectColor(status),
        }}
      >
        <Typography color="#fff" variant="h4">
          {count}
        </Typography>
      </Avatar>
      <Typography
        color="#fff"
        fontWeight="bold"
        fontSize="20px"
        variant="h5"
      >
        {emitCorrectLabel(status)}
      </Typography>
    </Box>
  );
};

export default TaskCounter;
