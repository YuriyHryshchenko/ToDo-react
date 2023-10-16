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
        height: '100vh',
        position: {
          sm: 'fixed',
        },
        right: 0,
        top: 0,
        width: '100%',
        backgroundColor: 'background.paper',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Profile name="Yurii" />
      <CreateTaskForm />
    </Grid>
  );
};

export default Sidebar;
