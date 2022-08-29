import React from 'react';

export interface IProtectedRouteProps {
  loggedIn: boolean,
  children: React.ReactElement,
}
