import React from 'react';
import { useAuth } from './authContext';

const AuthLoader = ({
  children,
}) => {
  const auth = useAuth();

  if (auth.isAuthenticated === undefined) {
    return 'Загрузка...'
  }

  return children;
};

export default AuthLoader;
