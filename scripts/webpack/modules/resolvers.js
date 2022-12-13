const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const resolvers = () => ({
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
        alias: {
          Images: PATHS.public,
          Components: PATHS.components,
          Data: PATHS.data,
          Interfaces: PATHS.interfaces,
          ReduxSlices: PATHS.reduxSlices,
          Helpers: PATHS.helpers,
          Hooks: PATHS.hooks,
          Apis: PATHS.apis,
        },
      },
});

module.exports = { resolvers };