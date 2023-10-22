import React from 'react';
import { Grid } from '@mui/material';
import Profile from '../profile/Profile';
import CreateTaskForm from '../createTaskForm/CreateTaskForm';

const Sidebar: React.FC = (): React.ReactElement => {
  {
    /*position: 'fixed',*/
  }
  {
    /*right: 0,*/
  }
  {
    /*top: 0,*/
  }
  return (
    <Grid
      item
      md={4}
      sm={6}
      xs={12}
      sx={{
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        position: {
          sm: 'fixed',
        },
        right: {
          sm: 0,
        },
        top: {
          sm: 0,
        },
        height: {
          sm: '100vh',
        },
      }}
    >
      <Profile name="Yurii" />
      <CreateTaskForm />
    </Grid>
  );
};

export default Sidebar;
