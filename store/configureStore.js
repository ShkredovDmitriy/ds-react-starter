import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const getMiddlewareList = (middlewareList, extra) => {
  const thunkWithArguments = thunk.withExtraArgument(extra);

  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunkWithArguments, ...middlewareList);
  }

  const _compose = (process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
  return _compose(
    applyMiddleware(thunkWithArguments, createLogger(), ...middlewareList),
  );
};

const configureStore = (state = {}, middlewareList = [], extra) => createStore(
  rootReducer, state, getMiddlewareList(middlewareList, extra),
);

export default configureStore;
