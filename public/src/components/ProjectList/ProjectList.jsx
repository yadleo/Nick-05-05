import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectList.css";
import ProjectEntry from "./ProjectEntry/ProjectEntry";

class ProjectList extends Component {
	// map ProjectEntry
	render() {
		return (
			<div>
				ProjectList
				<ProjectEntry />
			</div>
		);
	}
}

export default CssModules(ProjectList, styles);
