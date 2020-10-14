import * as R from 'ramda';

const applySelectors = (selectors, rest) => (...args) => R.pipe(
  R.mapObjIndexed(R.apply(R.__, args)),
  R.merge(rest),
)(selectors);

export default applySelectors;
