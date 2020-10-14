import config from "~/services/network/config";

export const ENDPOINTS = {
  SLIDES: "SLIDES",
  CONTESTS: "CONTESTS",
  CONTEST: "CONTEST",
  CATEGORIES: "CATEGORIES",
  PRODUCTS: "PRODUCTS",
  PRODUCT: "PRODUCT",
  ARTICLES: "ARTICLES",
  ARTICLE: "ARTICLE",
};

export default [
  {
    name: ENDPOINTS.SLIDES,
    url: `/sliders`,
    method: "get",
  },
  {
    name: ENDPOINTS.CONTESTS,
    url: `/contest`,
    method: "get",
  },
  {
    name: ENDPOINTS.CONTEST,
    urlFactory: ({ id }) => `/contest/${id}`,
    method: "get",
  },
  {
    name: ENDPOINTS.CATEGORIES,
    url: `/category`,
    method: "get",
  },
  {
    name: ENDPOINTS.PRODUCTS,
    url: `/products`,
    method: "get",
  },
  {
    name: ENDPOINTS.PRODUCT,
    urlFactory: ({ id }) => `/products/${id}`,
    method: "get",
  },
  {
    name: ENDPOINTS.ARTICLES,
    url: `/articles`,
    method: "get",
  },
  {
    name: ENDPOINTS.ARTICLE,
    urlFactory: ({ id }) => `/articles/${id}`,
    method: "get",
  },
];
