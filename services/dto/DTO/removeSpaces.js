import * as R from 'ramda';

const removeSpaces = (input) => {
  if (R.is(String, input)) {
    return input.replace(/\s+/g, '');
  }

  return input;
};

export default removeSpaces;
