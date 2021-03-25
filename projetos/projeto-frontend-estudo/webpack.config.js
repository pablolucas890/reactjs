const path = require('path');

module.exports = {
    entry: path.resolve(__dirname,'src','index.js'),
    output: {
        path: path.resolve(__dirname,'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname,'public'),
    },
    module:{
        rules:[//Loaders -> Regras para transformar arquivos react em arquivos que o browser interprete
            {//js
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {//css
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader'},//pega o css gerado pelo css-loader e injeta no html
                    { loader: 'css-loader'},//pega impostações do css e manda pra css
                ]
            },
            {//image
                test: /.*\.(gif|png|jpe?g)$/i,
                use: [
                    { loader: 'file-loader'}//pega as imagens importadas no react e mostra pro browser como interpretar
                ]
            }
        ]
    }
}