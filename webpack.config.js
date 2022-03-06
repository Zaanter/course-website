const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, args) => {

    return {
        entry: './src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist/static/js/'),
            filename: '[name].[contenthash].js'
        },
        mode: 'production',
        devtool:'source-map',
        resolve: {
            extensions: [".tsx", ".ts", ".jsx", ".js"],
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader'
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                {
                    test: /\.css$/,
                    use: [miniCssExtractPlugin.loader, 'css-loader']
                },
                {
                    test:/\.s[ac]ss/,
                    use: ['style-loader', 'scss-loader']
                },
                {
                    test: /\.(jpg|png|svg|gif)$/,
                    type: 'asset/resource',
                    // generation: {
                        
                    // }
                }
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                filename: '../../index.html',
                template: './public/index.html'
            }),
            new CleanWebpackPlugin(),
            new miniCssExtractPlugin({
                filename: '../css/[name].[contenthash].css'
            })
        ]

    }
}