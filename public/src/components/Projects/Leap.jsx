import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Project.css";

const imgSet = [
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718693/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.001.png",
		imgTitle: "Leap Keynote Slide 1"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718688/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.003.png",
		imgTitle: "Leap Keynote Slide 3"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718697/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.010.png",
		imgTitle: "Leap Keynote Slide 10"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718693/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.011.png",
		imgTitle: "Leap Keynote Slide 11"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718698/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.013.png",
		imgTitle: "Leap Keynote Slide 13"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718690/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.014.png",
		imgTitle: "Leap Keynote Slide 14"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718695/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.020.png",
		imgTitle: "Leap Keynote Slide 20"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718692/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.021.png",
		imgTitle: "Leap Keynote Slide 21"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718696/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.023.png",
		imgTitle: "Leap Keynote Slide 23"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718699/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.024.png",
		imgTitle: "Leap Keynote Slide 24"
	},
	{
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544718695/Nick%2005-05/imgs/LEAP/_Leap_Keynote_v02.025.png",
		imgTitle: "Leap Keynote Slide 25"
	}
];

class Leap extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="iframeContainer">
					<iframe
						src="https://player.vimeo.com/video/309574990"
						webkitallowfullscreen="true"
						mozallowfullscreen="true"
						allowFullScreen
					/>
				</div>
				<section styleName="sectionInfo">
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

export default CssModules(Leap, styles);
