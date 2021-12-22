/* config-overrides.js */
const path = require("path");

module.exports = {
    webpack: (config, env) => {
        var basepath = '/mindeswallpaper';
        process.env.BASEPATH = basepath;
        return config;
    }
}