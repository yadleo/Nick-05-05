import React, { Component } from "react";
import { Link } from "react-router-dom";
import CssModules from "react-css-modules";
import styles from "./ProjectEntry.css";

class ProjectEntry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false
		};
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
	}

	handleMouseEnter() {
		this.setState({ hover: true });
	}

	handleMouseLeave() {
		this.setState({ hover: false });
	}

	render() {
		const { projTitle, imgTitle, imgUrl, gifUrl } = this.props;
		const title = projTitle.split("_").join(" ");
		let imgGif = this.state.hover ? gifUrl : imgUrl;
		return (
			<li
				styleName="entry"
				onMouseEnter={this.handleMouseEnter}
				onMouseLeave={this.handleMouseLeave}
			>
				<div styleName="imgContainer">
					<Link to={`/${projTitle}`}>
						<img src={imgGif} alt={imgTitle} />
						<h1 styleName="title">{title}</h1>
					</Link>
				</div>
			</li>
		);
	}
}

export default CssModules(ProjectEntry, styles);
