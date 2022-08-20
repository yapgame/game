import React from 'react';
import { Navigate } from 'react-router-dom';
import { Urls } from '../../utils/constants';

import { IProps } from './IProps';

function ProtectedRoute({ loggedIn, children }: IProps) {
  if (!loggedIn) {
    return (
      <Navigate
        to={Urls.SIGNIN}
        replace
      />
    );
  }
  return children;
}

export default ProtectedRoute;
