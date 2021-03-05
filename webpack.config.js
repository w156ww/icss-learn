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
        home: {
            import: path.resolve(__dirname, "index.js"),
        },
    };
    fileList.forEach((folderName) => {
        entry[folderName] = {
            import: path.resolve(__dirname, `src/${folderName}`, `index.js`),
        };
    });
    return entry;
};
const getPlugins = () => {
    const pluginHtml = [];
    fileList.forEach((folderName) => {
        const option = {
            filename: `${folderName}/index.html`,
            template: path.resolve(
                __dirname,
                `src/${folderName}`,
                "index.html"
            ),
            chunks: [folderName],
        };
        pluginHtml.push(new HtmlWebpackPlugin(option));
    });
    return pluginHtml;
};

getFolderList();

module.exports = {
    mode: "development",
    entry: getEntry,
    output: {
        filename: "[name].chunck-[fullhash:8].js",
        path: path.resolve(__dirname, "dist"),
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "src"),
        compress: true, // gzip 压缩
        // host: "0.0.0.0", // 设置为 0.0.0.0, 服务器外部可访问
        port: 8081,
        hot: true,
        open: true,
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
        new HtmlWebpackPlugin({
            filename: "home/index.html",
            template: path.resolve(__dirname, "", "index.html"),
            chunks: ["home"],
        }),
        ...getPlugins(),
    ],
};
