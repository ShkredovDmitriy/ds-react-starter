import React, { useState, useEffect } from 'react';
import * as R from 'ramda';

import {AuthProvider} from './authContext';
import { GUEST } from './constants';

const Auth = ({
  auth: useAuth,
  config,
  permissions,
  children,
}) => {
  const [state, setState] = useState({
    isAuthenticated: undefined,
    user: {
      role: GUEST,
    },
    loading: true,
  });
  const auth = useAuth(config);

  const handleAuthentication = async () => {
    setState(state => ({
      ...state,
      loading: true,
    }));

    try {
      const authResult = await auth.parseHash();
      setSession(authResult.idTokenPayload)
    } catch (error) {
      console.log('no auth');
      setLogoutState();
      throw error;
    }
  };

  const initiateLogin = async (data) => {
    setState(state => ({
      ...state,
      loading: true,
    }));

    await auth.authorize(data);
    await handleAuthentication();
  };

  useEffect(() => {
    const handle401 = () => {
      if (state.isAuthenticated) {
        logout();
        setLogoutState();
      }
    };

    auth.subscribe.on(401, handle401);

    return () => {
      auth.subscribe.removeListener(401, handle401);
    };
  }, [state]);

  useEffect(() => {
    handleAuthentication();
  }, []);

  const setLogoutState = () => {
    setState(state => ({
      ...state,
      isAuthenticated: false,
      loading: false,
      user: {
        role: GUEST,
      },
    }));
  };

  const logout = async () => {
    setState(state => ({
      ...state,
      loading: true,
    }));

    await auth.logout();
    setLogoutState();
  };

  const setSession = (data) => {
    const user = {
      id: data.sub,
      email: data.email,
      role: data.role,
      ...data,
    };

    setState(state => ({
      ...state,
      isAuthenticated: true,
      loading: false,
      user,
    }));
  }

  const authProviderValue = {
    user: state.user,
    loading: state.loading,
    isAuthenticated: state.isAuthenticated,
    initiateLogin,
    handleAuthentication,
    logout,
    permissions,
    setSession,
  };

  return (
    <AuthProvider value={authProviderValue}>
      {children}
    </AuthProvider>
  );
};

export default Auth;
