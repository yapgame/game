import React, { useRef, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { setUserData } from '../../user/userSlice';

import Leaderboard from '../Leaderboard/Leaderboard';
import PageStart from '../PageStart/PageStart';
import NotFound from '../Errors/NotFound';
import InternalServerError from '../Errors/InternalServerError';
import ResponsiveAppBar from '../ResponsiveAppBar/ResponsiveAppBar';
import Footer from '../Footer/Footer';
import SignUp from '../PageSignUp/SignUp';
import SignIn from '../PageSignIn/SignIn';
import Profile from '../Profile/Profile';
import ProfileEdit from '../Profile/ProfileEdit';
import Team from '../Team/Team';
import Game from '../Game/Game';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { Urls } from '../../utils/constants';
import { IUser } from './IUser';

// import image from '../../images/2.jpg';

import auth from '../../utils/authApi';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const currentUser = useSelector(selectData);
  // const [currentUser, setCurrentUser] = React.useState({
  //  url: image as string, alt: 'name' }); // !!! => redux
  const userInfo: IUser = {
    first_name: 'Martin',
    second_name: 'Brest',
    display_name: 'Rudy',
    login: 'Fox',
    score: '77',
    email: 'email@yandex.ru',
    phone: '1234567890',
  };
  const mountedRef = useRef(false);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleSignUp = (data: Record<string, string>) => {
    auth
      .signUp(data)
      .then((res: Response) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSignIn = (data: Record<string, string>) => {
    auth
      .signIn(data)
      .then((res: Response) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditProfile = (data: Record<string, string>) => {
    console.log(data);
  };
  const handleEditAvatar = (data: Record<string, string>) => {
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
    auth
      .getUser()
      .then((user) => {
        // setCurrentUser(userInfo);
        console.log(user);
        dispatch(setUserData(user));
        setLoggedIn(true); // !!!
        navigate(Urls.PROFILE);
      });
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
                {...userInfo}
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
                {...userInfo}
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
