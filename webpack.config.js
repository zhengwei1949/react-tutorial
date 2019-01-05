const path = require('path')
module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    //作用类似于path.join
                    path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            },
            {
                test:/.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    }
}