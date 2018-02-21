module.exports = {
  entry: "./client/index.js",
  output: {
    path: __dirname,
    filename: "./jasminabasurita.github.io/bundle.js"
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  }
}
