import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";

class ImageComics extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="iframeContainer">
					<iframe
						src="https://player.vimeo.com/video/306194897"
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen
					/>
				</div>
				<div styleName="mainContainer">
					<article styleName="infoContainer">
						<h1 styleName="infoTitle">IMAGE COMICS Rebrand</h1>
						<h3 styleName="infoDescription">
							As the third largest comic book distributor in America, Image
							Comics has largely taken a back seat in the public’s eye. With an
							amazing company ideal of letting creator’s own 100% of their ideas
							and content, they are at the forefront of bringing unique and
							interesting stories to the public. With this rebrand, Image Comics
							can finally be bold in their stake of the comics industry but also
							still embrace and celebrate their ideal more than ever before.
						</h3>
					</article>
				</div>
			</main>
		);
	}
}

export default CssModules(ImageComics, styles);
