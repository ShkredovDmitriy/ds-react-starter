const projectName = "knauf-admin";

export const component = (namespace, message, object) => {
  console.log(
    "%c" + projectName + " - " + namespace + ": " + message + " %o",
    "color: SkyBlue",
    object
  );
};

export const obj = (namespace, message, object) => {
  console.log(
    "%c" + projectName + " - " + namespace + ": " + message + " %o",
    "color: SkyBlue",
    object
  );
};

export const func = (namespace, message, data) => {
  console.log(
    "%c" + projectName + " - " + namespace + ": " + message + " %o",
    "color: orange",
    data
  );
};

export const async = (namespace, message, data) => {
  console.log(
    "%c" + projectName + " - " + namespace + ": " + message + " %o",
    "color: yellow",
    data
  );
};

export const success = (namespace, message, data) => {
  console.log(
    "%c" + projectName + " - " + namespace + ": " + message + " %o",
    "color: green",
    data
  );
};

export const fail = (namespace, message, data) => {
  console.log(
    "%c" + projectName + " - " + namespace + ": " + message + " %o",
    "color: red",
    data
  );
};

export const trace = (msg) => (x) => (
  console.log("%c" + msg + " %o", "color: orange", x), x
);

//import * as log from "~/services/LogService";
// if (process.env.NODE_ENV !== "production") {
//   log.async("FaqList - testFunc", "start with args...", { a, b });
// }
