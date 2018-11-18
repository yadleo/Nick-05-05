import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Info.css";

class Info extends Component {
	render() {
		return (
			<main className="mainWrapper">
				<div className="mainContainer">
					<h3 className="infoBio">
						Hi! I am a motion graphic designer that graduated from Art Center
						College of Design. I love to create motion pieces that draw the
						viewer into a different mood or world. Through my travels around the
						world, I have learned how to communicate with all different kinds of
						people and in different languages, ones that I speak and also ones
						that I don’t. With this, I take great joy in connecting and solving
						problems with different groups of people.
						<a href="mailto:hello@05-05.info">hello@05-05.info</a>
						<a href="mailto:hello@05-05.info">Please contact for resume.</a>
					</h3>
				</div>
			</main>
		);
	}
}

export default CssModules(Info, styles);
