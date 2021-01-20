const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const marked = require('marked');
const markdownRenderer = new marked.Renderer();
module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "index.js"),
  output: {
    filename: "[name].chunck-[fullhash:8].js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "src"),
    compress: true, // gzip 压缩
    host: "0.0.0.0", // 设置为 0.0.0.0, 服务器外部可访问
    port: 8081,
    hot: true,
    open: "http://127.0.0.1:8081",
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        exclude: /node_moudles/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer: markdownRenderer
            }
          }
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],
};
