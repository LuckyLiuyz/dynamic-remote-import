const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	devtool: false,
	entry: "./src/index",
	mode: "development",
	devServer: {
		port: 3009,
		static: path.join(__dirname, "dist"),
	},
	output: {
		publicPath: "http://localhost:3009/",
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					presets: ["@babel/preset-react"],
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
		}),
	],
};
