const { merge } = require("webpack-merge");
const getCommonConfig = require("./webpack.common");
const { modules } = require("../modules/modules");

module.exports = () => {
  return merge(
    getCommonConfig(),
    {
      mode: "none",
      // mode: "production",
      devtool: false,
    },
    modules.loadProdCss(),
    modules.optimizeImages(),
    modules.optimizeBuild()
  );
};
