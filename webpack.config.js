const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: {
      main: './main.js'
   },
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: '[name].bundle.js'
   },
   devServer: {
      inline: true,
      port: 3000
   },
   module: {
      rules: [
         {
            test: /\.(css|sass|scss)$/,
            use: ['style-loader', 'css-loader','sass-loader'],
          },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/preset-env', '@babel/preset-react']
            }
         }
      ]
   },
   mode: 'development',
   plugins: [
      new HtmlWebpackPlugin({
         template: './index.html'
      }),
   ],
   optimization: {
      splitChunks: {
         chunks: 'all'
      }
   }
}