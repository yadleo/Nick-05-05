import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class ProjectTemplate extends Component {
	render() {
		return (
			<main className="mainWrapper">
				<div className="iframeContainer">{/* iframe */}</div>
				<div className="mainContainer">
					<article className="infoContainer">
						<h1 className="projectInfoTitle">Title Goes Here</h1>
						<h3 className="projectInfoDescription">
							Project Description Goes Here
						</h3>
					</article>
					<div className="imgContainer">
						<img src="" alt="" />
					</div>
				</div>
			</main>
		);
	}
}

export default CssModules(ProjectTemplate, styles);
