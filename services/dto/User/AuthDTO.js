import * as R from 'ramda';

const AuthDTO = (input) => {
  const sub = R.path(['uuid'], input);
  const email = R.path(['email'], input);
  const role = R.path(['role'], input);

  return {
    ...input,
    sub,
    email,
    role,
  };
};

export default AuthDTO;
