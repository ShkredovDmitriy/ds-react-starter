
import { createContext, useContext } from 'react';

const routesContext = createContext({});

export const RoutesConsumer = routesContext.Consumer;
export const RoutesProvider = routesContext.Provider;

export const useRoutes = () => useContext(routesContext);
