// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
const { "process.env.BACKEND_URL": BACKEND_URL } = require("./env-config");

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/cennik": { page: "/cennik" },
      "/kontakt": { page: "/kontakt" },
      "/o-nas": { page: "/o-nas" },
      "/uslugi": { page: "/uslugi" }
    };
  },
  assetPrefix: BACKEND_URL
};
