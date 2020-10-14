import { createContext, useContext } from 'react';

 const ApiContext = createContext({
 });

export const ApiProvider = ApiContext.Provider;
export const ApiConsumer = ApiContext.Consumer;
export const useApi = () => useContext(ApiContext);
