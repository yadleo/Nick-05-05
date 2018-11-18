import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Work.css";
import Reel from "./Reel/Reel";
import ProjectList from "./ProjectList/ProjectList";

class Work extends Component {
	render() {
		return (
			<main>
				<Reel />
				<ProjectList />
			</main>
		);
	}
}

export default CssModules(Work, styles);
