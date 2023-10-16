import React from 'react';
import {CssBaseline, ThemeProvider} from "@mui/material";
import {customTheme} from "./theme/customTheme";
import Dashboard from "./pages/dashboard/Dashboard";

const App: React.FC = (): React.ReactElement => {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline/>
            <Dashboard/>
        </ThemeProvider>
    );
};

export default App;
