export const category = "category";
export const categories = "categories";
export const subcategories = "subcategories";
export const groups = "groups";
export const groupNames = "groupNames";
export const groupHierarchy = "groupHierarchy";
export const age = "age";
export const initialState = {
  category: "",
  categories: [],
  subcategories: [],
  groups: [],
  groupNames: [],
  groupHierarchy: [],
  age: "",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case category:
      return { ...state, category: action.data };
    case categories:
      return { ...state, categories: action.data };
    case subcategories:
      return { ...state, subcategories: action.data };
    case groups:
      return { ...state, groups: action.data };
    case groupNames:
      return { ...state, groupNames: action.data };
    case groupHierarchy:
      return { ...state, groupHierarchy: action.data };
    case age:
      return { ...state, age: action.data };
    default:
      throw new Error("This action is not applicable to this component.");
  }
};
