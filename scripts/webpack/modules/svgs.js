const loadSvg = () => ({
    module:{ 
        rules: [
            {
                test: /\.svg$/i,
                issuer: {
                    and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
                  },
                use: [
                    '@svgr/webpack',
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/[name].[ext]',
                        }
                    }
                ]
            },
        ]
    },
});

module.exports = { loadSvg };