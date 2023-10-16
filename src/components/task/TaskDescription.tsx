import React from 'react';
import { Box, Typography } from '@mui/material';
import { ITaskDescription } from './interfaces/ITaskDescription';

const TaskDescription: React.FC<ITaskDescription> = (
  props,
): React.ReactElement => {
  const { description = 'Lorem ipsum doloro sit amet ' } =
    props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default TaskDescription;
