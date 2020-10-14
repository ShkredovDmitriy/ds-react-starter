import { createContext, useContext } from 'react';
import { GUEST } from './users';

const authContext = createContext({
  isAuthenticated: false, // to check if authenticated or not
  user: {
    role: GUEST,
  }, // store all the user details
  accessToken: '', // accessToken of user for Auth0
  initiateLogin: () => {}, // to start the login process
  handleAuthentication: () => {}, // handle Auth0 login process
  logout: () => {}, // logout the user
  setSession: () => {},
});

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;
export const useAuth = () => useContext(authContext);
