// webpack.config.js
const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
	entry: {
		Button: "./src/components/Button/index.js",
		Input: "./src/components/Input/index.js",
	},
	output: {
		filename: "[name].js",
		path: path.resolve(__dirname, "./dist"),
		library: "[name]",
		libraryTarget: "umd",
	},
	resolve: {
		extensions: [".js", ".jsx", ".tsx"],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: false, // 禁止css modules
						},
					},
					"sass-loader",
				],
			},
			{
				test: /\.(jpg|jpeg|png|gif)$/,
				use: ["url-loader"],
			},
		],
	},
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["dist"],
		}),
	],
};
