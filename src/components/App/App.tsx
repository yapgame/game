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
import SignUp from '../PageSign/SignUp';
import SignIn from '../PageSign/SignIn';
import Profile from '../Profile/Profile';

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
      <SignUp />
      <SignIn />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
