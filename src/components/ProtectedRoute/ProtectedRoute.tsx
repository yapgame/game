import React from 'react';
import { Navigate } from 'react-router-dom';
import { Urls } from 'Utils/constants';

import { IProtectedRouteProps } from 'Interfaces/interfaces';

function ProtectedRoute({ loggedIn, children }: IProtectedRouteProps) {
  if (!loggedIn) {
    return (
      <Navigate to={Urls.SIGN.IN} replace />
    );
  }
  return children;
}

export default ProtectedRoute;
