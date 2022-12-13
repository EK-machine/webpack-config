const { merge } = require("webpack-merge");
const getCommonConfig = require("./webpack.common");
const { modules } = require("../modules/modules");

module.exports = () => {
  return merge(
    getCommonConfig(),
    {
      mode: "production",
      devtool: false,
    },
    modules.loadProdCss(),
    modules.optimizeImages()
  );
};
