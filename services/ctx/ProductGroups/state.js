export const groups = "groups";
export const groupNames = "groupNames";
export const groupDescriptions = "groupDescriptions";
export const groupHierarchy = "groupHierarchy";
export const initialState = {
  groups: [],
  groupNames: [],
  groupDescriptions: [],
  groupHierarchy: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case groups:
      return { ...state, groups: action.data };
    case groupNames:
      return { ...state, groupNames: action.data };
    case groupDescriptions:
      return { ...state, groupDescriptions: action.data };
    case groupHierarchy:
      return { ...state, groupHierarchy: action.data };
    default:
      throw new Error("This action is not applicable to this component.");
  }
};
