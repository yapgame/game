import React from 'react';
import { Navigate } from 'react-router-dom';
import { Urls } from '../../utils/constants';

import { IProtectedRouteProps } from '../../interfaces/interfaces';

function ProtectedRoute({ loggedIn, children }: IProtectedRouteProps) {
  if (!loggedIn) {
    return (
      <Navigate
        to={Urls.SIGN.IN}
        replace
      />
    );
  }
  return children;
}

export default ProtectedRoute;
