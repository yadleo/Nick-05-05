import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Project.css";

const imgSet = [
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718643/Nick%2005-05/imgs/image_rebrand/web_02_mural.png",
		imgTitle: "mural"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718642/Nick%2005-05/imgs/image_rebrand/web_03_convention.png",
		imgTitle: "convention"
	}
];

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
				<section styleName="sectionInfo">
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
				</section>

				<section styleName="sectionImages">
					<ul styleName="imagesList">
						{imgSet.map(img => {
							return (
								<li styleName="imagesItem">
									<img src={img.imgUrl} alt={img.imgTitle} styleName="image" />
								</li>
							);
						})}
					</ul>
				</section>
			</main>
		);
	}
}

export default CssModules(ImageComics, styles);
