const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },

  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },

  devServer:{
    static:{
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
  },

  plugins: [new HtmlWebpackPlugin({
    title: 'APP TASK',
    filename: 'index.html',
    template: './index.html'
  })],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.scss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },

  target: 'node'
};