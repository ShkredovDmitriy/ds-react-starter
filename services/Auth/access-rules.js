import USERS from './users';

export const PERMISSIONS = {
  HOMEPAGE: 'home-page:visit',
};

const USER_RULES = {
  [USERS.GUEST]: {
    static: [
      PERMISSIONS.HOMEPAGE,
    ],
  },
};

export default USER_RULES;
