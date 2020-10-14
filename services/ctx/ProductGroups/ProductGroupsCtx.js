import React, { useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import { useApi, ENDPOINTS } from "~/services/api";
import * as R from "ramda";
import {
  reducer,
  initialState,
  groups,
  groupNames,
  groupDescriptions,
  groupHierarchy,
} from "./state";
import { ProductGroupsProvider } from "./productGroups";
import * as log from "~/services/LogService";

const ProductGroupsCtx = ({ children, ...props }) => {
  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("ProductGroupsCtx", "component render with props...", {
      children,
      props,
    });
  }
  //#endregion Loging----------------------------------------------------------/
  const [state, dispatch] = useReducer(reducer, initialState);
  const api = useApi();

  const router = useRouter();

  useEffect(() => {
    let canceledRequest = false;
    async function fetchGroups() {
      //#region Loging----------------------------------------------------------/
      if (process.env.NODE_ENV !== "production") {
        log.async(
          "ProductGroupsCtx - api.CATEGORIES",
          "start async operation with args...",
          {}
        );
      }
      //#endregion Loging----------------------------------------------------------/
      const response = await api[ENDPOINTS.CATEGORIES]().catch((error) => {
        //#region Loging----------------------------------------------------------/
        if (process.env.NODE_ENV !== "production") {
          log.fail(
            "ProductGroupsCtx - api.CATEGORIES",
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
          "ProductGroupsCtx - api.CATEGORIES",
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

        const groupDescr = R.pipe(
          R.project(["id", "description"]),
          R.compose(R.fromPairs, R.map(R.props(["id", "description"])))
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

        dispatch({
          type: groupNames,
          data: groupTitles,
        });
        dispatch({
          type: groupDescriptions,
          data: groupDescr,
        });
        dispatch({
          type: groupHierarchy,
          data: hierarchy,
        });
      }
    }
    fetchGroups();
    return () => {
      canceledRequest = true;
    };
  }, []);

  const ProductGroupsProviderValue = {
    groups: state.groups,
    groupNames: state.groupNames,
    groupDescriptions: state.groupDescriptions,
    groupHierarchy: state.groupHierarchy,
  };

  //#region Loging----------------------------------------------------------/
  if (process.env.NODE_ENV !== "production") {
    log.component("ProductFilterProvider", "component render with state...", {
      state,
    });
  }
  //#endregion Loging----------------------------------------------------------/
  return (
    <ProductGroupsProvider value={ProductGroupsProviderValue}>
      {children}
    </ProductGroupsProvider>
  );
};

export default ProductGroupsCtx;
