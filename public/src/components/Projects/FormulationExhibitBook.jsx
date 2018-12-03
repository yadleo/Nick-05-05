import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectTemplate.css";
import Gallery from "./Gallery/Gallery";

const data = [
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623431/Nick%2005-05/formulations_edit_01.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623434/Nick%2005-05/formulations_edit_02.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623433/Nick%2005-05/formulations_edit_03.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_04.jpg",
	"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_05.jpg"
];

class FormulationExhibitBook extends Component {
	// const { gallery, currImg } = this.state;
	render() {
		return (
			<main styleName="mainWrapper" style={{ marginTop: 0 }}>
				<div styleName="mainContainer">
					<Gallery />
					<article styleName="infoContainer">
						<h1 styleName="infoTitle">Formulation Exhibit Book</h1>
						<h3 styleName="infoDescription">
							Math is all around us and can explain everything in the world.
							Instead of looking at math only through a scientific lens, this
							book showcases seven artists that implements math in their art
							works, from designers to scientists to photographers. We can all
							use math to create beautiful pieces. Inspired by these artists,
							the book is also designed through the use of mathematical ratios
							and formulas.
						</h3>
					</article>
				</div>
				{/* <div styleName="imgContainer">
					<img
						src="https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623431/Nick%2005-05/formulations_edit_01.jpg"
						alt="Formulation1"
					/>
					<img
						src="https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623434/Nick%2005-05/formulations_edit_02.jpg"
						alt="Formulation2"
					/>
					<img
						src="https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623433/Nick%2005-05/formulations_edit_03.jpg"
						alt="Formulation3"
					/>
					<img
						src="https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_04.jpg"
						alt="Formulation4"
					/>
					<img
						src="https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/formulations_edit_05.jpg"
						alt="Formulation5"
					/>
				</div> */}
			</main>
		);
	}
}

export default CssModules(FormulationExhibitBook, styles);
