import { useAuth } from './authContext';
import { getConfig } from './utils';

const useGetConfig = (config) => {
  const auth = useAuth();

  return getConfig(auth, config);
};

export default useGetConfig;
