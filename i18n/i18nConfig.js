import axios from "axios";
import config from "~/services/network/config";

const axiosInstance = axios.create({
  baseURL: config.SITE_URL,
  //baseURL: "http://0.0.0.0:8888",
});

export default {
  defaultLanguage: "ru-RU",
  otherLanguages: ["ru-RU"],
  fallbackLng: "ru-RU",
  ns: ["common"],
  defaultNS: "common",
  load: "currentOnly",
  localePath: "locales",
  //debug: true,
  react: {
    useSuspense: false,
    wait: true,
  },
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  backend: {
    ajax: async (url, { init } = {}, cb) => {
      if (process.browser) {
        try {
          const res = await axiosInstance(
            url,
            Object.assign(
              {
                transformResponse: [(data) => data],
              },
              init
            )
          );

          cb(res.data, res);

          return res;
        } catch (error) {
          cb("", error);
          return error;
        }
      }
    },
  },
};
