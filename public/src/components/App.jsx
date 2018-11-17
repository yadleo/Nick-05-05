import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./App.css";
import Header from "./Header/Header";
import Reel from "./Reel/Reel";
import ProjectList from "./ProjectList/ProjectList";

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div styleName="appFrame">
				<Header />
				<Reel />
				<ProjectList />
			</div>
		);
	}
}

export default CssModules(App, styles);
