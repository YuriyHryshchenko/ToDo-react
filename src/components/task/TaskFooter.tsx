import React from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';
import { Status } from '../createTaskForm/enums/Status';

const TaskFooter: React.FC<ITaskFooter> = (
  props,
): React.ReactElement => {
  const {
    id,
    status,
    onChange = (e) => console.log(e),
    onClick = (e) => console.log(e),
  } = props;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mt={4}
      sx={{
        flexDirection: {
          md: 'row',
          xs: 'column',
        },
        rowGap: '10px',
      }}
    >
      <FormControlLabel
        control={
          <Switch
            onChange={(e) => onChange(e, id)}
            color="warning"
            defaultChecked={status === Status.inProgress}
          />
        }
        label="In progress"
      />
      <Button
        variant="contained"
        size="small"
        color="success"
        sx={{
          color: '#fff',
        }}
        onClick={(e) => onClick(e, id)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
