import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Info.css";

class Info extends Component {
	render() {
		return (
			<main styleName="mainWrapper">
				<div styleName="mainContainer">
					<article styleName="info">
						<h3 styleName="infoBio">
							Hi! My name is Nicholas Lai and I am a motion graphic designer
							that graduated from Art Center College of Design. I love to create
							motion pieces that draw the viewer into a different mood or world.
							Through my travels around the world, I have learned how to
							communicate with all different kinds of people and in different
							languages, ones that I speak and also ones that I don’t. With
							this, I take great joy in connecting and solving problems with
							different groups of people.
							<div styleName="infoEmail">
								<a href="mailto:hello@05-05.info">hello@05-05.info</a>
							</div>
							<div styleName="infoContact">
								<a href="mailto:hello@05-05.info">Please contact for resume.</a>
							</div>
						</h3>
					</article>
				</div>
			</main>
		);
	}
}

export default CssModules(Info, styles);
