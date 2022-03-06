const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, args) => { 
    
    return{
        entry:'./src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js'
        },
        mode:'development',
        devtool:'eval',
        devServer:{
            publicPath:'/assets/',
            contentBase: path.join(__dirname, 'public')
        },
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
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                filename:'./index.html',
                template:'./public/index.html'
            }),
            new CleanWebpackPlugin()
        ]

}}