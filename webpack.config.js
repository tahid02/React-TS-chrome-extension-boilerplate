// this is actually a node.js file
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "cheap-module-source-map",
  entry: {
    popup: path.resolve("./src/popup/popup.tsx"),
    options: path.resolve("./src/options/options.tsx"),
    background: path.resolve("./src/background/background.ts"),
    contentScript: path.resolve("./src/contentScript/contentScript.tsx"),
  }, // the base file ( where other files were imported)
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/, // convert .tsx to js using ts-loader package
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/i, // convert .tsx to js using ts-loader package
        exclude: /node_modules/,
      },
      {
        type: "asset/resource",
        test: /\.(jpg|jpeg|png|woff|woff2|ot|ttf|svg)$/,

        // I prefer to do these relative imports  (<img src="icon.png" alt="" width="400" />), but that's another option if you want to do it. And this is important because sometimes when we install certain modules, it comes packed in with font files or SVG files for icons and we need to use the special rule in order to handle those.
      },
    ],
  },
  plugins: [
    // it can handle anything that module cant do
    new CopyPlugin({
      // manifest.json is static here, it has no imported files, so we directly copy it in dist folder
      patterns: [
        {
          from: path.resolve("src/static"), //
          to: path.resolve("dist"),
        },
      ],
    }),
    new HtmlPlugin({
      // we could have copied popup.html like manifest.json but we are using pupup.tsx that needs to be bundled
      title: "React extension",
      filename: "popup.html",
      chunks: ["popup"], // this is  a single js file produced by webpack
    }),
    new HtmlPlugin({
      // we could have  directly create options.html in src , but we are using pupup.tsx that needs to be bundled
      title: "React extension",
      filename: "options.html",
      chunks: ["options"], // this is  a single js file produced by webpack
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"], // work on imported files for these files
  },
  output: {
    filename: "[name].js", // Bundle the imported files in this single files
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
