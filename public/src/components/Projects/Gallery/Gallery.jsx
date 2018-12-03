import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Gallery.css";

const data = [
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623431/Nick%2005-05/formulations_edit_01.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623434/Nick%2005-05/formulations_edit_02.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623433/Nick%2005-05/formulations_edit_03.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_04.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_05.jpg"
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
		this.setState = { currImg: data[newIdx] };
	}

	prevImg() {
		const newIdx = this.state.currImg.index - 1;
		this.setState = { currImg: data[newIdx] };
	}

	render() {
		const { gallery, currImg } = this.state;
		return (
			<div className="mainContainer">
				<div className="navContainer">
					<button onClick={this.prevImg} disabled={currImg.index === 0}>
						prev
					</button>
					<button
						onClick={this.nextImg}
						disabled={currImg.index === gallery.length - 1}
					>
						next
					</button>
				</div>
			</div>
		);
	}
}

export default CssModules(Gallery, styles);
