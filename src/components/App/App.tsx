/* eslint-disable import/no-unresolved */
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Leaderboard from '../Leaderboard/Leaderboard';
import PageStart from '../PageStart/PageStart';
import NotFound from '../Errors/NotFound';
import InternalServerError from '../Errors/InternalServerError';
import TabPanel from '../Tabs/Tabs';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';

function App() {
  return (
    <>
      <Logo />
      <TabPanel />
      <CssBaseline />
      <Leaderboard />
      <PageStart />
      <NotFound />
      <InternalServerError />
      <Footer />
    </>
  );
}

export default App;
