const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const marked = require("marked");
const webpack = require("webpack");
const markdownRenderer = new marked.Renderer();

const { TEST, NODE_ENV, build_env, MOCK } = process.env;

const folderRead = path.join(__dirname, "src");

const getFolderList = () => {
    const fileList = fs.readdirSync(folderRead);
    return fileList;
};
const fileList = getFolderList();
const getEntry = () => {
    const entry = {
        index: path.resolve(__dirname, "index.js"),
    };
    console.log("fileList", fileList);
    fileList.forEach((folderName) => {
        entry[folderName] = path.resolve(
            __dirname,
            `src/${folderName}`,
            `index.js`
        );
    });
    console.log("entry", entry);
    return entry;
};
// const getPlugins = () => {
//   const pluginHtml = []
//   fileList.forEach(folderName => {
//     pluginHtml.push(new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, `src/${folderName}`, "index.html"),
//       title: 'icss 目录',
//       filename: `pages/${folderName}.html`,
//       chunks: [folderName]
//     }))
//   })
//   return pluginHtml
// }

getFolderList();

module.exports = {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, "index.js"),
        section1: path.resolve(__dirname, "src/section1", "index.js"),
    },
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
            {
                test: /\.css$/i,
                exclude: /node_moudles/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(
                `${Date.now()}-${new Date().toLocaleString()}`
            ),
            "process.env": {
                build_env: build_env,
                MOCK: MOCK,
                NODE_ENV: NODE_ENV,
            },
        }),
        // new HtmlWebpackPlugin({
        //   template: path.resolve(__dirname, "", "index.html"),
        //   title: 'icss 目录',
        //   filename: 'pages1/index.html',
        //   chunks: ['index']
        // }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/section1", "index.html"),
            title: "section1",
            filename: "pages2/section1.html",
            chunks: ["section1"],
        }),
        // ...getPlugins()
    ],
};
