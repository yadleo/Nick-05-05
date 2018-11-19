import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Work.css";
import Reel from "./Reel/Reel";
import ProjectList from "./ProjectList/ProjectList";

class Work extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="mainContainer">
					<section styleName="componentsContainer">
						{/* <Reel /> */}
						<ProjectList />
					</section>
				</div>
			</main>
		);
	}
}

export default CssModules(Work, styles);
