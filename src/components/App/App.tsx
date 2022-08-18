/* eslint-disable import/no-unresolved */
import React, { useRef, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Leaderboard from '../Leaderboard/Leaderboard';
import PageStart from '../PageStart/PageStart';
import NotFound from '../Errors/NotFound';
import InternalServerError from '../Errors/InternalServerError';
import ResponsiveAppBar from '../ResponsiveAppBar/ResponsiveAppBar';
import Footer from '../Footer/Footer';
import SignUp from '../PageSignUp/SignUp';
import SignIn from '../PageSignIn/SignIn';
import Profile from '../Profile/Profile';
import Team from '../Team/Team';
import Game from '../Game/Game';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import {
  BASE_URL,
  SIGNUP_URL,
  SIGNIN_URL,
  PROFILE_URL,
  PLAY_URL,
  LEADERBOARD_URL,
  INTERNAL_SERVER_ERROR,
  TEAM_URL,
  GAME_URL,
} from '../../utils/constants';

function App() {
  const mountedRef = useRef(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const handleSignUp = (data: Record<string, string>) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  const handleSignIn = (data: Record<string, string>) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  // const handleSignOut = () => {
  //   // eslint-disable-next-line no-console
  //   console.log('handleSignOut');
  // };
  const handleStartGame = () => {
    // eslint-disable-next-line no-console
    console.log('start');
  };
  useEffect(() => {
    mountedRef.current = true;
    setLoggedIn(false); // !!!
    return () => {
      mountedRef.current = false;
    };
  }, []);
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar />
      <Routes>
        <Route
          path={BASE_URL}
          element={(
            <ProtectedRoute
              loggedIn={loggedIn}
            >
              <Game />
            </ProtectedRoute>
          )}
        />
        <Route
          path={GAME_URL}
          element={(
            // <ProtectedRoute
            //   loggedIn={loggedIn}
            // >
              <Game />
            // </ProtectedRoute>
          )}
        />
        <Route
          path={PROFILE_URL}
          element={(
            <ProtectedRoute
              loggedIn={loggedIn}
            >
              <Profile />
            </ProtectedRoute>
          )}
        />
        <Route
          path={PLAY_URL}
          element={(
            <ProtectedRoute
              loggedIn={loggedIn}
            >
              <PageStart
                handleStartGame={handleStartGame}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={SIGNUP_URL}
          element={(
            <SignUp
              handleSignUp={handleSignUp}
            />
          )}
        />
        <Route
          path={SIGNIN_URL}
          element={(
            <SignIn
              handleSignIn={handleSignIn}
            />
          )}
        />
        <Route
          path={LEADERBOARD_URL}
          element={(<Leaderboard />)}
        />
        <Route
          path={TEAM_URL}
          element={(<Team />)}
        />
        <Route
          path={INTERNAL_SERVER_ERROR}
          element={(<InternalServerError />)}
        />
        <Route
          path="*"
          element={(<NotFound />)}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
