import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Project.css";

class ProjectTemplate extends Component {
	render() {
		return (
			<main className="mainWrapper">
				<div className="iframeContainer">{/* iframe */}</div>
				<section className="sectionInfo">
					<article className="infoContainer">
						<h1 className="infoTitle">Title Goes Here</h1>
						<h3 className="infoDescription">Project Description Goes Here</h3>
					</article>
				</section>
			</main>
		);
	}
}

export default CssModules(ProjectTemplate, styles);
