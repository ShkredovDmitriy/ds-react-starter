import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useApi } from '~/services/api';
import routes from '~/routes';

const VerifyEmail = () => {
  const Router = useRouter();
  const api = useApi();

  useEffect(() => {
    const { query } = Router.query;

    if (query) {
      api.http({
        url: query,
        method: 'get',
      });
      Router.push(routes.index);
    }
  }, [Router]);

  return null;
};

export default VerifyEmail;
