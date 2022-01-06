const path = require("path");

module.exports = {
  entry: {
    "pardot/magical": "./src/pardot/index.ts",
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "js/"),
    filename: "[name].js",
  },
  optimization: {
    usedExports: true,
  },
};
