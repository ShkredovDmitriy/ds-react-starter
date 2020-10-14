import { RoutesProvider as Provider } from './context';

const RoutesProvider = ({
  children,
  routes,
}) => {
  return (
    <Provider value={routes}>
      {children}
    </Provider>
  );
};

export default RoutesProvider;
