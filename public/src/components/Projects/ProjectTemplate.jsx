import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class ProjectTemplate extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="mainContainer">
					<section styleName="projectVideo">{/* video goes here */}</section>
					<section styleName="projectInfo">
						<h1 styleName="projectInfoTitle">Title Goes Here</h1>
						<h3 styleName="projectInfoDescription">
							Project Description Goes Here
						</h3>
					</section>
					<section styleName="projectImgs">Project Images goes here</section>
				</div>
			</main>
		);
	}
}

export default CssModules(ProjectTemplate, styles);
