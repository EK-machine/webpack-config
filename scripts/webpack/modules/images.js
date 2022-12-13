const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loadImages = () => ({
    module:{ 
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'public/[name].[ext]'
                    }
                },
                ],
            },
        ]
    },
});

module.exports = { loadImages };