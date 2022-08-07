import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Leaderboard from '../Leaderboard/Leaderboard';
import Start from '../Start/Start';
import TabPanel from '../Tabs/Tabs';

function App() {
  return (
    <>
      <TabPanel />
      <CssBaseline />
      <Leaderboard />
      <Start />
    </>
  );
}

export default App;
