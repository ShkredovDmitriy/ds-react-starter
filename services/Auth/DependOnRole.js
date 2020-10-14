import React from 'react';
import * as R from 'ramda';
import { useAuth } from './authContext';
import { GUEST } from './constants';

const DependOnRole = ({
  components,
  ...props
}) => {
  const { user } = useAuth();
  const Component = R.propOr(components[GUEST], user.role, components);

  if (!Component) {
    return null;
  }

  return (
    <Component key={user.role} {...props} />
  )
};

export default DependOnRole;
