const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const { modules } = require("../modules/modules");
const { BUILD_DIRECTORY, SOURCE_DIRECTORY } = require("../constants");

module.exports = () => {
  const { NODE_ENV } = process.env;
  return merge(
    {
      entry: [SOURCE_DIRECTORY],
      output: {
        path: BUILD_DIRECTORY,
        filename: "js/bundle.js",
        clean: true,
      },
      plugins: [
        // DefinePlugin is used for creating enviroments to be visible anywhere the code
        new DefinePlugin({
          __ENV__: JSON.stringify(NODE_ENV),
          __DEV__: NODE_ENV === "development",
          __PROD__: NODE_ENV === "production",
          __STAGE__: NODE_ENV === "stage",
        }),
      ],
    },
    modules.loadJavaScript(),
    modules.loadTypeScript(),
    modules.loadSvg(),
    modules.loadImages(),
    modules.loadSass(),
    modules.loadFonts(),
    // modules.resolvers(),
    modules.setupPlugins()
  );
};
