const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/, //Nos permite identificar los archivos según se encuentran en nuestro entorno.
        exclude: /node_modules/, //Aqui es donde van a estar los archivos que no queremos que se transformen.
        use: {
          loader: "babel-loader", // Utilizar un loader como configuración establecida.
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "styles/style.css"),
          to: "",
        },
      ],
    })
  ],
};