var webpack = require('webpack')

module.exports = {
    devtool: "source-map",
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',
        'webpack/hot/only-dev-server',
        './src/js/app.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
