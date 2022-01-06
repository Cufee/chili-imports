const path = require("path");

module.exports = {
  entry: {
    "pardot/embedded/magical": "./src/pardot/embedded/index.ts",
    "pardot/handler/magical": "./src/pardot/handler/index.ts",
    "pardot/native/magical": "./src/pardot/native/index.ts",
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
