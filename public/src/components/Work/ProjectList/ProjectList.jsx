import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectList.css";
import ProjectEntry from "./ProjectEntry/ProjectEntry";

class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	// map ProjectEntry
	render() {
		return (
			<div styleName="mainWrapper">
				ProjectList
				<ul styleName="projectList">
					<ProjectEntry />
					<ProjectEntry />
					<ProjectEntry />
					<ProjectEntry />
				</ul>
			</div>
		);
	}
}

export default CssModules(ProjectList, styles);
