import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class OldBoyTitleSeq extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="iframeContainer">
					<iframe
						src="https://player.vimeo.com/video/96555639"
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen
					/>
				</div>
				<div styleName="mainContainer">
					<article styleName="infoContainer">
						<h1 styleName="infoTitle">Old Boy Title Sequence</h1>
						<h3 styleName="infoDescription">
							A homage to the South Korean film, Oldboy, we created a title
							sequence that illustrates the passage of time in the film. As we
							pass through the different locations that Dae-Suk travels through,
							we also see his sanity unravelling, as each location becomes more
							and more abstract. The lighting and tone of this piece illustrates
							the mood of the film overall and the dark storyline.
						</h3>
					</article>
				</div>
			</main>
		);
	}
}

export default CssModules(OldBoyTitleSeq, styles);
