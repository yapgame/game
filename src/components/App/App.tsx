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
  const mountedRef = useRef(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleSignUp = (data: Record<string, string>) => {
    auth
      .signUp(data)
      .then((res: Response) => {
        navigate(Urls.SIGN.IN);
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
      })
      .then(() => {
        navigate(Urls.PROFILE.INDEX);
        auth
          .getUser()
          .then((user) => {
            dispatch(setUserData(user));
            setLoggedIn(true);
            navigate(Urls.PROFILE.INDEX);
          });
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
      })
      .then(() => {
        navigate(Urls.SIGN.IN);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('handleSignOut');
  };

  useEffect(() => {
    mountedRef.current = true;
    auth
      .getUser()
      .then((user) => {
        dispatch(setUserData(user));
        setLoggedIn(true);
        if (location.pathname === Urls.SIGN.IN
          || location.pathname === Urls.SIGN.UP) {
          navigate(Urls.PROFILE.INDEX);
        } else {
          navigate(location.pathname);
        }
      });

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
          path={Urls.SIGN.UP}
          element={(
            <SignUp handleSignUp={handleSignUp} />
          )}
        />
        <Route
          path={Urls.SIGN.IN}
          element={(
            <SignIn handleSignIn={handleSignIn} />
          )}
        />
        <Route
          path={Urls.MAIN.GAME}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <Game />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PROFILE.EDIT}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <ProfileEdit />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PROFILE.INDEX}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <Profile />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.MAIN.PLAY}
          element={(
            <ProtectedRoute loggedIn={loggedIn}>
              <PageStart />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.MAIN.LEADERBOARD}
          element={(<Leaderboard />)}
        />
        <Route
          path={Urls.MAIN.TEAM}
          element={(<Team />)}
        />
        <Route
          path={Urls.ERROR.INTERNAL_SERVER}
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
