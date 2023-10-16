import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { ITaskHeader } from './interfaces/ITaskHeader';
import { format } from 'date-fns';

const TaskHeader: React.FC<ITaskHeader> = (
  props,
): React.ReactElement => {
  const { title = 'Title', date = new Date() } = props;
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent="space-between"
      mb={3}
      sx={{
        flexDirection: {
          md: 'row',
          xs: 'column',
        },
        rowGap: '10px',
      }}
    >
      <Box>
        <Typography variant="h6">{title}</Typography>
      </Box>
      <Box>
        <Chip
          variant="outlined"
          label={format(date, 'PPP')}
        />
      </Box>
    </Box>
  );
};

export default TaskHeader;
