import React from 'react';
import {
  Box,
  Button,
  FormControlLabel,
  Switch,
} from '@mui/material';
import { ITaskFooter } from './interfaces/ITaskFooter';

const TaskFooter: React.FC<ITaskFooter> = (
  props,
): React.ReactElement => {
  const {
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
            onChange={(e) => onChange(e)}
            color="warning"
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
        onClick={(e) => onClick(e)}
      >
        Mark Complete
      </Button>
    </Box>
  );
};

export default TaskFooter;
