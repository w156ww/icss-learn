const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const marked = require("marked");
const markdownRenderer = new marked.Renderer();
const homePath = path.resolve(__dirname, "index.js");
console.log("homePath: ", homePath);
module.exports = {
    mode: "development",
    entry: {
        home: {
            import: path.resolve(__dirname, "index.js"),
        },
        section1: {
            import: path.resolve(__dirname, "src/section1", "index.js"),
        },
    },
    output: {
        filename: "[name].chunck-[fullhash:8].js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        compress: true, // gzip 压缩
        historyApiFallback: true,
        // host: "0.0.0.0", // 设置为 0.0.0.0, 服务器外部可访问
        port: 8081,
        hot: true,
        open: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /\.md$/,
                exclude: /node_moudles/,
                use: [
                    {
                        loader: "html-loader",
                    },
                    {
                        loader: "markdown-loader",
                        options: {
                            pedantic: true,
                            renderer: markdownRenderer,
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "home/index.html",
            template: path.resolve(__dirname, "", "index.html"),
            chunks: ["home"],
        }),
        new HtmlWebpackPlugin({
            filename: "section1/index.html",
            template: path.resolve(__dirname, "src/section1", "index.html"),
            chunks: ["section1"],
        }),
    ],
};
