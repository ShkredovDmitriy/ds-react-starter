import * as R from "ramda";

export const getVariant = (route, variants) => {
  const filterByRoute = (route) => {
    return (variant) => R.test(new RegExp(variant.route, "i"), route);
  };
  return R.pipe(
    R.filter(filterByRoute(route)),
    R.head,
    R.propOr("main-page", "variant")
  )(variants);
};

export const getArticlesIdFromRoute = (pathname) => {
  if (R.test(new RegExp("/articles/1", "i"), pathname)) return "1";
  if (R.test(new RegExp("/articles/2", "i"), pathname)) return "2";
  if (R.test(new RegExp("/articles/3", "i"), pathname)) return "3";
  if (R.test(new RegExp("/articles/4", "i"), pathname)) return "4";
  if (R.test(new RegExp("/articles/5", "i"), pathname)) return "5";
  if (R.test(new RegExp("/articles/6", "i"), pathname)) return "6";
};

export const getSystemIdFromRoute = (pathname) => {
  if (R.test(new RegExp("/system/1", "i"), pathname)) return "1";
  if (R.test(new RegExp("/system/2", "i"), pathname)) return "2";
  if (R.test(new RegExp("/system/3", "i"), pathname)) return "3";
};
