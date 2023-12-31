import React from 'react';
import { Grid } from '@mui/material';
import Sidebar from '../../components/sidebar/Sidebar';
import TaskArea from '../../components/taskArea/TaskArea';

const Dashboard: React.FC = (): React.ReactElement => {
  return (
    <Grid container minHeight="100vh" p={0} m={0}>
      <TaskArea />
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
