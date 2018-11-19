import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class ProjectTemplate extends Component {
	render() {
		return (
			<main className="mainWrapper">
				<div className="mainContainer">
					<section className="projectVideo">{/* video goes here */}</section>
					<section className="projectInfo">
						<h1 className="projectInfoTitle">Title Goes Here</h1>
						<h3 className="projectInfoDescription">
							Project Description Goes Here
						</h3>
					</section>
					<section className="projectImgs">Project Images goes here</section>
				</div>
			</main>
		);
	}
}

export default CssModules(ProjectTemplate, styles);
