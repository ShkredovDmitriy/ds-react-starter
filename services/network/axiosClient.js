import * as R from "ramda";
import axios from "axios";
import { ConcurrencyManager } from "axios-concurrency";
import Cookies from "js-cookie";
import { sleep } from "~/helpers";
import config from "./config";
import { EventEmitter } from "events";

const defaultAxiosConfig = {
  baseURL: config.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  withCredentials: false,
};

export const subscribe = new EventEmitter();
export const http = axios.create(defaultAxiosConfig);

const MAX_CONCURRENT_REQUESTS = 3;
ConcurrencyManager(http, MAX_CONCURRENT_REQUESTS);

if (config.isXSRF) {
  const XSRF_TOKEN = "XSRF-TOKEN";
  const XSRF_URL = "auth/csrf-cookie";
  const XSRF_ERROR = "XSRF_ERROR";
  const XSRF_UPDATING = "XSRF_UPDATING";

  let isXSRFUpdating = false;

  const updateXSRF = async () => {
    isXSRFUpdating = true;
    await http.get(XSRF_URL);
    isXSRFUpdating = false;
  };

  http.interceptors.request.use(async (config) => {
    if (Cookies.get(XSRF_TOKEN) || config.url === XSRF_URL) {
      return config;
    }

    if (isXSRFUpdating) {
      return Promise.reject({
        error: XSRF_UPDATING,
        config,
      });
    }

    await updateXSRF();
    return Promise.reject({
      error: XSRF_UPDATING,
      config,
    });
  }, Promise.reject);

  http.interceptors.response.use(R.identity, async function (error) {
    if (error.error === XSRF_UPDATING) {
      while (isXSRFUpdating) {
        await sleep(500);
      }
      return http(error.config);
    }

    subscribe.emit("error", error);
    return Promise.reject(error);
  });
}
