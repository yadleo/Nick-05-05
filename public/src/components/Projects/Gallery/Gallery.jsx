import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Gallery.css";

const data = [
	{
		index: 0,
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623431/Nick%2005-05/formulations_edit_01.jpg",
		imgTitle: "formulations_01"
	},
	{
		index: 1,
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623434/Nick%2005-05/formulations_edit_02.jpg",
		imgTitle: "formulations_02 "
	},
	{
		index: 2,
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623433/Nick%2005-05/formulations_edit_03.jpg",
		imgTitle: "formulations_03"
	},
	{
		index: 3,
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_04.jpg",
		imgTitle: "formulations_04"
	},
	{
		index: 4,
		imgUrl:
			"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_05.jpg",
		imgTitle: "formulations_05"
	}
];

class Gallery extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gallery: data,
			currImg: data[0]
		};
		this.nextImg = this.nextImg.bind(this);
		this.prevImg = this.prevImg.bind(this);
	}

	nextImg() {
		const newIdx = this.state.currImg.index + 1;
		this.setState({ currImg: data[newIdx] });
	}

	prevImg() {
		const newIdx = this.state.currImg.index - 1;
		this.setState({ currImg: data[newIdx] });
	}

	render() {
		const { gallery, currImg } = this.state;
		const { imgUrl, imgTitle } = currImg;
		return (
			<div styleName="mainContainer">
				<div styleName="galleryContainer">
					<img src={imgUrl} alt={imgTitle} />
				</div>

				<button
					styleName="button"
					onClick={this.prevImg}
					disabled={currImg.index === 0}
				>
					&#60;
				</button>
				{`${currImg.index + 1} / ${gallery.length}`}
				<button
					styleName="button"
					onClick={this.nextImg}
					disabled={currImg.index === gallery.length - 1}
				>
					&#62;
				</button>
			</div>
		);
	}
}

export default CssModules(Gallery, styles);
