import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class OneHundredSeasonFiveOpening extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="iframeContainer">
					<iframe
						src="https://player.vimeo.com/video/301564612"
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen
					/>
				</div>
				<div styleName="mainContainer">
					<article styleName="infoContainer">
						<h1 styleName="infoTitle">the 100 season 5 opening</h1>
						<h3 styleName="infoDescription">
							After the Praimfaya ravaged Earth at the end of season 4 of The
							100, we are brought back to Earth 6 years later in the start of
							Season 5. The opening to season 5 of The 100 serves as a callback
							to the events of Season 4 but also as a foretelling of things to
							come in Season 5. As the fire burns across the previous opening,
							we then had to create the world that remained in the aftermath of
							Praimfaya.
							<br />
							<br />
							This project was worked on during an internship at
							<a href="http://www.plucky.la/"> Plucky</a>.
							<br />
							<br />
							Role: 2D Animator, Compositor, UI Design
						</h3>
					</article>
				</div>
			</main>
		);
	}
}

export default CssModules(OneHundredSeasonFiveOpening, styles);
