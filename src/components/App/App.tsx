import React, { useRef, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Route,
  Routes,
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUserData } from '../../user/userSlice';

import Leaderboard from '../Leaderboard/Leaderboard';
import PageStart from '../PageStart/PageStart';
import ResponsiveAppBar from '../ResponsiveAppBar/ResponsiveAppBar';
import Footer from '../Footer/Footer';
import SignUp from '../PageSignUp/SignUp';
import SignIn from '../PageSignIn/SignIn';
import Profile from '../Profile/Profile';
import ProfileEdit from '../Profile/ProfileEdit';
import Team from '../Team/Team';
import Game from '../Game/Game';
import NotFound from '../Errors/NotFound';
import InternalServerError from '../Errors/InternalServerError';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { Urls } from '../../utils/constants';
import auth from '../../utils/authApi';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const score = '77';
  const mountedRef = useRef(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleSignUp = (data: Record<string, string>) => {
    auth
      .signUp(data)
      .then((res: Response) => {
        navigate(Urls.SIGNIN);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignIn = (data: Record<string, string>) => {
    auth
      .signIn(data)
      .then(() => {
        setLoggedIn(true);
        navigate(Urls.PROFILE);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditProfile = (data: Record<string, string>) => {
    auth
      .changeUserInfo(data)
      .then((res: Response) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditAvatar = (data: File) => {
    auth
      .changeUserAvatar(data)
      .then((res: Response) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setLoggedIn(false);
        navigate(Urls.SIGNIN);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line no-console
    console.log('handleSignOut');
  };

  const handleStartGame = () => {
    // eslint-disable-next-line no-console
    console.log('start');
  };

  useEffect(() => {
    mountedRef.current = true;
    if (location.pathname === Urls.PROFILE
      || location.pathname === Urls.PROFILE_EDIT
      || location.pathname === Urls.PLAY) {
      auth
        .getUser()
        .then((user) => {
          dispatch(setUserData(user));
          setLoggedIn(true);
          // navigate(Urls.PROFILE);
        });
    }
    return () => {
      mountedRef.current = false;
    };
  }, [loggedIn]);
  return (
    <>
      <CssBaseline />
      <ResponsiveAppBar
        handleSignOut={handleSignOut}
        loggedIn={loggedIn}
      />
      <Routes>
        <Route
          path={Urls.SIGNUP}
          element={(
            <SignUp
              handleSignUp={handleSignUp}
            />
          )}
        />
        <Route
          path={Urls.SIGNIN}
          element={(
            <SignIn
              handleSignIn={handleSignIn}
            />
          )}
        />
        <Route
          path={Urls.BASE}
          element={(
            <ProtectedRoute
              loggedIn={loggedIn}
            >
              <Game />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PROFILE_EDIT}
          element={(
            <ProtectedRoute
              loggedIn={loggedIn}
            >
              <ProfileEdit
                onHandleSubmit={handleEditProfile}
                score={score}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PROFILE}
          element={(
            <ProtectedRoute
              loggedIn={loggedIn}
            >
              <Profile
                onHandleSubmit={handleEditAvatar}
                score={score}
              />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PLAY}
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
          path={Urls.LEADERBOARD}
          element={(<Leaderboard />)}
        />
        <Route
          path={Urls.TEAM}
          element={(<Team />)}
        />
        <Route
          path={Urls.INTERNAL_SERVER_ERROR}
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
