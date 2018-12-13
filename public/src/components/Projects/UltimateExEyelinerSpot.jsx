import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Project.css";

class UltimateExEyelinerSpot extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="iframeContainer">
					<iframe
						src="https://player.vimeo.com/video/229815134"
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen
					/>
				</div>
				<section styleName="sectionInfo">
					<article styleName="infoContainer">
						<h1 styleName="infoTitle">1028 ultimate ex eyeliner spot</h1>
						<h3 styleName="infoDescription">
							CRAFLUX, a motion design studio in Taipei, was tasked with
							creating a spot for the launch of cosmetic brand, 1028’s new
							eyeliner. To highlight the eyeliners main three features: Ultra
							Black, Ease of Application, and Smudge Proof, we created an unique
							and elegant fantasy world that the eyeliner lives in.
							<br />
							<br />
							This project was worked on during an internship at
							<a href="http://www.craflux.com/"> CRAFLUX</a>.
							<br />
							<br />
							Role: 2D Animator, Compositor
						</h3>
					</article>
				</section>
			</main>
		);
	}
}

export default CssModules(UltimateExEyelinerSpot, styles);
