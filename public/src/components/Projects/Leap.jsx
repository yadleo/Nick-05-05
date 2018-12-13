import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class Leap extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				{/* <div styleName="iframeContainer">iframe</div> */}
				<div styleName="mainContainer">
					<article styleName="infoContainer">
						<h1 styleName="infoTitle">Leap</h1>
						<h3 styleName="infoDescription">
							This is the journey of a little boy overcoming his fear though the
							power of his imagination. We wanted to create a story that many
							people could relate to and empathize with, so we decided to tell
							the story of a boy having to face his fear of jumping down from a
							diving board. To overcome his fear of jumping, he lets his
							imagination take over and delves into a whole different world.
							<br />
							<br />
							Role: 2D Animator, Conceptor, Designer
						</h3>
					</article>
				</div>
			</main>
		);
	}
}

export default CssModules(Leap, styles);
