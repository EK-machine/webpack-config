const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const optimizeImages = () => ({
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              "imagemin-gifsicle",
              "imagemin-mozjpeg",
              "imagemin-pngquant",
              "imagemin-svgo",
            ],
          },
        },
      }),
    ],
  },
});

module.exports = { optimizeImages };
