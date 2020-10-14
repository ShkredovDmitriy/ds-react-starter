import { createContext, useContext } from 'react';

export const DataContext = createContext({});

export const DataConsumer = DataContext.Consumer;
export const useData = () => useContext(DataContext);
