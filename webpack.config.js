const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require( 'path' );
module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
      path: path.resolve( __dirname, 'dist' ),
      filename: 'main.js',
    },
    resolve: {
      alias: {
        hitagi: path.resolve(__dirname, 'hitagi.js')
      }
    },
    module: {
      rules: [
        {
          test: require.resolve(path.resolve(__dirname, 'hitagi.js')),
          use: 'exports-loader?hitagi',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin()
    ]
};
