import React, { useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { customTheme } from './theme/customTheme';
import Dashboard from './pages/dashboard/Dashboard';
import { useAppDispatch } from './hooks/hooks';
import { getTasksAsyncAction } from './models/tasks/asyncActions/asyncActions';

const App: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTasksAsyncAction());
  }, []);
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
