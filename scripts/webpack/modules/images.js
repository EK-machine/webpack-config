const loadImages = () => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "public/[name].[hash:7].[ext]",
            },
          },
        ],
      },
    ],
  },
});

module.exports = { loadImages };
