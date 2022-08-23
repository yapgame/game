import React, { useRef, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Route,
  Routes,
<<<<<<< Updated upstream
} from 'react-router-dom';
=======
  useNavigate,
  useLocation,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { setUserData } from '../../user/userSlice';

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
import { IUser } from './IUser';

import image from '../../images/2.jpg';

import auth from '../../utils/authApi';

function App() {
  const currentUser: Record<string, string> = { url: image as string, alt: 'name' };
  const userInfo: IUser = {
    first_name: 'Martin',
    second_name: 'Brest',
    display_name: 'Rudy',
    login: 'Fox',
    score: '77',
    email: 'email@yandex.ru',
    phone: '1234567890',
  };
=======
import auth from '../../utils/authApi';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const score = '77';
>>>>>>> Stashed changes
  const mountedRef = useRef(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const handleSignUp = (data: Record<string, string>) => {
    // eslint-disable-next-line no-console
    console.log(data);
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
    // eslint-disable-next-line no-console
    console.log(data);
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
<<<<<<< Updated upstream
  // const handleSignOut = () => {
  //   // eslint-disable-next-line no-console
  //   console.log('handleSignOut');
  // };
=======

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

>>>>>>> Stashed changes
  const handleStartGame = () => {
    // eslint-disable-next-line no-console
    console.log('start');
  };

  useEffect(() => {
    mountedRef.current = true;
<<<<<<< Updated upstream
    setLoggedIn(true); // !!!
=======
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
>>>>>>> Stashed changes
    return () => {
      mountedRef.current = false;
    };
  }, [loggedIn]);
  return (
    <>
      <CssBaseline />
<<<<<<< Updated upstream
      <ResponsiveAppBar {...currentUser} />
=======
      <ResponsiveAppBar
        handleSignOut={handleSignOut}
        loggedIn={loggedIn}
      />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
              <ProfileEdit {...userInfo} />
=======
              <ProfileEdit
                onHandleSubmit={handleEditProfile}
                score={score}
              />
>>>>>>> Stashed changes
            </ProtectedRoute>
          )}
        />
        <Route
          path={Urls.PROFILE}
          element={(
            <ProtectedRoute
              loggedIn={loggedIn}
            >
<<<<<<< Updated upstream
              <Profile {...userInfo} />
=======
              <Profile
                onHandleSubmit={handleEditAvatar}
                score={score}
              />
>>>>>>> Stashed changes
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
