import React, { useMemo, useEffect } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { useApi } from '~/services/api';

const StoreProvider = ({
  children,
}) => {
  const api = useApi();
  const store = useMemo(() => {
    return configureStore(undefined, undefined, { api });
  }, []);
  
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default StoreProvider;
