import React, { useMemo } from 'react';
import * as R from 'ramda';
import bugsnag from '~/services/bugsnag';
import { ApiProvider } from './apiContext';

const Api = ({
  network,
  routes,
  errorHandler: useErrorHandler,
  responseHandler: useResponseHandler,
  children,
}) => {
  const errorHandler = useErrorHandler();
  const responseHandler = useResponseHandler();
  const ApiProviderValue = useMemo(() => {
    const fn = route => async ({ args, ...config } = {}) => {
      let url = route.url || config.url;

      if (route.urlFactory) {
        url = route.urlFactory(args);
      }

      try {

        const response = await network.http({
          ...config,
          ...route,
          url,
        });

        return responseHandler(response, route);
      } catch (error) {
        const responseData = R.path(['response', 'data'], error);
        bugsnag.notify(
          error,
          {
            request: {
              data: responseData,
            },
          },
        );
        return errorHandler(error, route);
      }
    };

    return routes.reduce(
      (acc, route) => {
        return {
          ...acc,
          [route.name]: fn(route),
        }
      },
      {
        http: fn({}),
      },
    );
  }, [network, routes]);

  return (
    <ApiProvider value={ApiProviderValue}>
      {children}
    </ApiProvider>
  );
};

export default Api;
