const base = {
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "url-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif|eot|ttf|woff2|woff)$/,
        use: [
          {
            loader: "url-loader"
          }
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  }
};

function makeConfig(filename) {
  return {
    ...base,
    entry: "./src/" + filename,
    output: {
      path: `${__dirname}/dist/`,
      filename,
      publicPath: "."
    }
  };
}

module.exports = [makeConfig("app.js"), makeConfig("admin.js")];
