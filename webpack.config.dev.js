const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env, args) => { 
    
    return{
        entry:'./src/index.tsx',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].bundle.js'
        },
        mode:'development',
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
                }
            ]
        },
        plugins: [
            new htmlWebpackPlugin({
                filename:'index.html',
                template:'./public/index.html'
            }),
            new miniCssExtractPlugin({
                filename: './static/css/[name].css'
            }),
            new CleanWebpackPlugin()
        ],
        devServer:{
            port: 3000,
            compress: false,
            static: path.join(__dirname, 'dist'),
            historyApiFallback: true
       }

}}