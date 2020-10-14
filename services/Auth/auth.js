import * as R from 'ramda';
import { useApi, ENDPOINTS } from '~/services/api';
import { useRouter } from 'next/router';
import routes from '~/routes';
import { useDispatch } from 'react-redux';
import actions from '~/store/actions';
import AuthDTO from '~/services/dto/User/AuthDTO';
import { useEffect, useMemo } from 'react';
import { EventEmitter } from 'events';

const UNAUTHORIZED_STATUS = 401;

const Auth = ({
  network,
}) => {
  const api = useApi();
  const Router = useRouter();
  const dispatch = useDispatch();
  const subscribe = useMemo(() => new EventEmitter(), []);

  const authorize = async (data) => {
    const authData = await api[ENDPOINTS.LOGIN]({ data });
    return authData;
  };

  const logout = async (data) => {
    const response = await api[ENDPOINTS.LOGOUT]({ data });
    actions.resetStore()(dispatch);
    Router.push(routes.index);
    return response;
  };

  const getUser = () => {
    return api[ENDPOINTS.GET_PROFILE]();
  };

  const parseHash = async () => {
    const response = await getUser();
    const user = R.pathOr({}, ['data'], response);

    return {
      idTokenPayload: AuthDTO(user),
    };
  };

  useEffect(() => {
    const errorHandler = error => {
      const status = R.path(['response', 'status'], error);

      if (status === UNAUTHORIZED_STATUS) {
        subscribe.emit(UNAUTHORIZED_STATUS, error);
      }
    };

    network.subscribe.on('error', errorHandler);

    return () => {
      network.subscribe.removeListener('error', errorHandler);
    };
  }, []);

  return {
    authorize,
    logout,
    parseHash,
    getUser,
    subscribe,
  };
};

export default Auth;
