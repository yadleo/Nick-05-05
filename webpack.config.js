const path = require("path");
const ExtractTextPlugin = "extract-text-webpack-plugin";
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
					presets: ["@babel/preset-env", "@babel/preset-react"]
				},
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin(
					"style-loader",
					combineLoaders([
						{
							loader: "css-loader",
							options: {
								modules: true,
								localIdentName: "[name]__[local]___[hash:base64:5]"
							}
						}
					])
				)
			}
		]
	},
	resolve: ["js", "jsx"],
	plugins: [new ExtractTextPlugin("style.css")],
	mode: "development"
};
