var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
//This will create an index.html file in the dist foler as well as include the index_bundle.js as well

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    //path is a utlity that links to the directory
    filename: "index_bundle.js",
    //this is the file that the transpiled code will be in
    publicPath: "/"
    //this is where the browser will get the assets from
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    historyApiFallback: true
    //it will redirect to '/' and then React Router will direct it
    //to whatever route that is specified. Case in point: Before this
    //we refreshed the page and got Cannot GET 'example' In this case
    //what this allows us to be able to do the opposite when refreshed
    //The browser will go back to localhost:8080 and then React Router
    //will direct us back to localhost:8080/example
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
