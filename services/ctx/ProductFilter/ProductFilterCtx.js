import React, { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { useApi, ENDPOINTS } from "~/services/api";
import * as R from "ramda";
import {
  reducer,
  initialState,
  category,
  categories,
  subcategories,
  groups,
  groupNames,
  groupHierarchy,
  age,
} from "./state";
import { ProductFilterProvider } from "./productFilterContext";
import * as log from "~/services/LogService";

const ProductFilterCtx = ({ children, ...props }) => {
  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("ProductFilterCtx", "component render with props...", {
      children,
      props,
    });
  }
  //#endregion Loging----------------------------------------------------------/
  const [state, dispatch] = useReducer(reducer, initialState);
  const api = useApi();
  const setCategory = (newCategory) => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterCtx - setCategory",
        "function start with arguments...",
        { newCategory }
      );
    }
    //#endregion Loging----------------------------------------------------------/
    if (R.not(R.isNil(newCategory))) {
      dispatch({
        type: category,
        data: newCategory,
      });
    } else {
      dispatch({
        type: category,
        data: "",
      });
    }
    dispatch({
      type: subcategories,
      data: [],
    });
  };

  const setAge = (newAge) => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterCtx - setAge",
        "function start with arguments...",
        { newAge }
      );
    }
    //#endregion Loging----------------------------------------------------------/
    if (R.not(R.isNil(newAge))) {
      dispatch({
        type: age,
        data: newAge,
      });
    } else {
      dispatch({
        type: age,
        data: "",
      });
    }
  };

  const addSubcategory = (newSubcategory) => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterCtx - addSubcategory",
        "function start with arguments...",
        { newSubcategory }
      );
    }
    //#endregion Loging----------------------------------------------------------/
    if (R.not(R.isNil(newSubcategory))) {
      dispatch({
        type: subcategories,
        data: R.insert(0, newSubcategory, state.subcategories),
      });
    }
  };

  const removeSubcategory = (subcategoryToRemove) => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterCtx - removeSubcategory",
        "function start with arguments...",
        { subcategoryToRemove }
      );
    }
    //#endregion Loging----------------------------------------------------------/
    dispatch({
      type: subcategories,
      data: R.filter((item) => (item == subcategoryToRemove ? false : true))(
        state.subcategories
      ),
    });
  };

  const resetSubcategories = () => {
    dispatch({
      type: subcategories,
      data: [],
    });
  };

  const addGroup = (newGroup) => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterCtx - addGroup",
        "function start with arguments...",
        { newGroup }
      );
    }
    //#endregion Loging----------------------------------------------------------/

    if (R.not(R.isNil(newGroup))) {
      dispatch({
        type: groups,
        data: R.insert(0, newGroup, state.groups),
      });
    }
  };

  const removeGroup = (groupToRemove) => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterCtx - removeGroup",
        "function start with arguments...",
        { groupToRemove }
      );
    }
    //#endregion Loging----------------------------------------------------------/

    dispatch({
      type: groups,
      data: R.filter((item) => (item == groupToRemove ? false : true))(
        state.groups
      ),
    });
  };

  const router = useRouter();

  useEffect(() => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterProvider - useEffect change route for groups",
        "function start with arguments...",
        { groups }
      );
    }
    //#endregion Loging----------------------------------------------------------/
    let params = { ...router.query };

    params = { ...params, groups: state.groups.toString() };
    if (R.isEmpty(params.groups)) {
      delete params.groups;
    }

    params = { ...params, age: state.age };
    if (R.isEmpty(params.age)) {
      delete params.age;
    }

    params = { ...params, category: state.category };
    if (R.isEmpty(params.category)) {
      delete params.category;
    }

    params = { ...params, subcategories: state.subcategories.toString() };
    if (R.isEmpty(params.subcategories)) {
      delete params.subcategories;
    }

    if (R.not(R.isNil(params.productId))) {
      if (
        R.not(R.isEmpty(state.age)) ||
        R.not(R.isEmpty(state.category)) ||
        R.not(R.isEmpty(state.subcategories)) ||
        R.not(R.isEmpty(state.groups))
      ) {
        router.push({
          pathname: "/catalog",
          query: { ...params },
        });
      }
    } else {
      router.push({
        pathname: "/catalog",
        query: { ...params },
      });
    }
  }, [state]);

  useEffect(() => {
    //#region Loging----------------------------------------------------------/
    if (process.env.NODE_ENV !== "production") {
      log.func(
        "ProductFilterCtx - useEffect set params from router",
        "function start with arguments...",
        { ...router.query }
      );
    }
    //#endregion Loging----------------------------------------------------------/
    const params = { ...router.query };

    if (R.not(R.isNil(params.category))) {
      dispatch({
        type: category,
        data: params.category,
      });
    }
    if (R.not(R.isNil(params.subcategories))) {
      dispatch({
        type: subcategories,
        data: params.subcategories.split(","),
      });
    }
    if (R.not(R.isNil(params.groups))) {
      dispatch({
        type: groups,
        data: params.groups.split(","),
      });
    }
    if (R.not(R.isNil(params.age))) {
      dispatch({
        type: age,
        data: params.age,
      });
    }
  }, []);

  useEffect(() => {
    let canceledRequest = false;
    async function fetchGroups() {
      //#region Loging----------------------------------------------------------/
      if (process.env.NODE_ENV !== "production") {
        log.async(
          "ProductFilterProvider - api.CATEGORIES",
          "start async operation with args...",
          {}
        );
      }
      //#endregion Loging----------------------------------------------------------/
      const response = await api[ENDPOINTS.CATEGORIES]().catch((error) => {
        //#region Loging----------------------------------------------------------/
        if (process.env.NODE_ENV !== "production") {
          log.fail(
            "ProductFilterProvider - api.CATEGORIES",
            "async operation fail with error...",
            { error }
          );
        }
        //#endregion Loging----------------------------------------------------------/
        throw error;
      });
      //#region Loging----------------------------------------------------------/
      if (process.env.NODE_ENV !== "production") {
        log.success(
          "ProductFilterProvider - api.CATEGORIES",
          "async operation success with value...",
          { response }
        );
      }
      //#endregion Loging----------------------------------------------------------/

      if (!canceledRequest) {
        const groupTitles = R.pipe(
          R.project(["id", "title"]),
          R.compose(R.fromPairs, R.map(R.props(["id", "title"])))
        )(response.data);

        const hierarchy = R.pipe(
          R.project(["id", "parent_id"]),
          R.compose(R.fromPairs, R.map(R.props(["id", "parent_id"]))),
          R.pickBy((val, key) => {
            return R.isNil(val) ? true : false;
          }),
          R.keys,
          R.map((parent) => ({
            category: parent,
            subcategories: R.filter((child) =>
              child.parent_id === parent ? true : false
            )(response.data),
          }))
        )(response.data);

        const productCategories = R.pipe(
          R.project(["id", "parent_id", "name"])
        )(response.data);

        dispatch({
          type: groupNames,
          data: groupTitles,
        });
        dispatch({
          type: groupHierarchy,
          data: hierarchy,
        });
        dispatch({
          type: categories,
          data: productCategories,
        });
      }
    }
    fetchGroups();
    return () => {
      canceledRequest = true;
    };
  }, []);

  const ProductFilterProviderValue = {
    category: state.category,
    categories: state.categories,
    setCategory: setCategory,
    subcategories: state.subcategories,
    addSubcategory: addSubcategory,
    removeSubcategory: removeSubcategory,
    resetSubcategories: resetSubcategories,
    groups: state.groups,
    groupNames: state.groupNames,
    groupHierarchy: state.groupHierarchy,
    addGroup: addGroup,
    removeGroup: removeGroup,
    age: state.age,
    setAge: setAge,
  };

  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("ProductFilterProvider", "component render with state...", {
      state,
    });
  }
  //#endregion Loging----------------------------------------------------------/
  return (
    <ProductFilterProvider value={ProductFilterProviderValue}>
      {children}
    </ProductFilterProvider>
  );
};

export default ProductFilterCtx;
