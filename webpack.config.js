const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "build.js"
  },

  plugins: [new HtmlWebpackPlugin({
    title: 'APP TASK',
    filename: 'index.html',
    template: './src/app/ui/todoWeb/index.html'
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
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ]
  },

  target: 'node'
};