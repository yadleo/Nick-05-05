import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./App.css";
import Header from "./Header/Header";
import Work from "./Work/Work";

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div styleName="appFrame">
				<Header />
				<Work />
			</div>
		);
	}
}

export default CssModules(App, styles);
