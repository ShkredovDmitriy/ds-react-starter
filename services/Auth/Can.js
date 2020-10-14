import rules from './access-rules';
import { useAuth } from './authContext';

const check = (rules, role, action, data) => {
  const permissions = rules[role];
  if (!permissions) {
    // role is not present in the rules
    return false;
  }

  const staticPermissions = permissions.static;

  if (staticPermissions && staticPermissions.includes(action)) {
    // static rule not provided for action
    return true;
  }

  const dynamicPermissions = permissions.dynamic;

  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions[action];
    if (!permissionCondition) {
      // dynamic rule not provided for action
      return false;
    }

    return permissionCondition(data);
  }
  return false;
};

const CanBase = props => {
  return check(rules, props.role, props.perform, props.data)
    ? props.yes()
    : props.no();
}
CanBase.defaultProps = {
  yes: () => null,
  no: () => null
};

export const useCan = props => {
  const auth = useAuth();

  return check(rules, auth.user.role, props.perform, props.data);
};

const Can = props => {
  const auth = useAuth();
  return CanBase({
    role: auth.user.role,
    ...props,
  });
};

Can.defaultProps = {
  yes: () => null,
  no: () => null
};

export default Can;
