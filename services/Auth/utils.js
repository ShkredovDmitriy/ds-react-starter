import * as R from 'ramda';
import { GUEST } from './constants';

export const getConfig = (auth, config) => R.pipe(
  R.path(['user', 'role']),
  R.propOr(config[GUEST], R.__, config),
)(auth);
