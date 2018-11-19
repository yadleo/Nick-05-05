import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class FormulationExhibitBook extends Component {
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
						<h1 styleName="infoTitle">Formulation Exhibit Book</h1>
						<h3 className="infoDescription">
							Math is all around us and can explain everything in the world.
							Instead of looking at math only through a scientific lens, this
							book showcases seven artists that implements math in their art
							works, from designers to scientists to photographers. We can all
							use math to create beautiful pieces. Inspired by these artists,
							the book is also designed through the use of mathematical ratios
							and formulas.
						</h3>
					</article>
					<div styleName="imgContainer">
						<img
							src="https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542561844/Nick%2005-05/DSC_0948_2.png"
							alt="DSC_0948_2"
						/>
					</div>
				</div>
			</main>
		);
	}
}

export default CssModules(FormulationExhibitBook, styles);
