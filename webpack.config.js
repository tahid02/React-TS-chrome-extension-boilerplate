// this is actually a node.js file
const path = require("path");
module.exports = {
  mode: "development",
  entry: "./src/test.tsx", // the base file ( where other files were imported)
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/, // convert .tsx to js using ts-loader package
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // work on imported files for these files
  },
  output: {
    filename: "index.js", // Bundle the imported files in this single files
    path: path.resolve(__dirname, "dist"),
  },
};
