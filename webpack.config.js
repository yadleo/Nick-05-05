const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SRC_DIR = path.join(__dirname, "/public/src");
const DIST_DIR = path.join(__dirname, "/");

module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		filename: "bundle.js",
		path: `${DIST_DIR}`
	},
	module: {
		rules: [
			{
				test: /\.jsx?/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/preset-react", "@babel/preset-env"]
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							modules: true,
							localIdentName: "[name]__[local]___[hash:base64:5]"
						}
					}
				]
			}
		]
	},
	resolve: { extensions: [".js", ".jsx"] },
	plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
	mode: "development"
};
