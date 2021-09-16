const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool:"source-map",

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3002,
    open:true,
    
  },
  output: {
    publicPath: "http://localhost:3002/", // Added this
  },
  experiments: {
    topLevelAwait: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        easyshare: "easyshare@https://https://easysharestage.setmore.com/easyshare.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};