const path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ["@svgr/webpack"],
              },
            {
                test: /\.(gif|png|gif|woff|ttf|svg|eot|jpe?g)$/i,
                use: [
                    "file-loader",
                    {
                        loader: "image-webpack-loader",
                        options: {
                            bypassOnDebug: true,
                            disable: true
                        },
                    },
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    performance: {
        hints: process.env.NODE_ENV === "production" ? "error" : false,
        maxEntrypointSize: 580000,
        maxAssetSize: 580000
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, "public"),
    },
};