import React, { Component } from "react";
import { Link } from "react-router-dom";
import CssModules from "react-css-modules";
import styles from "./ProjectEntry.css";

class ProjectEntry extends Component {
	render() {
		const { projTitle, imgTitle, imgUrl } = this.props;
		const title = projTitle.split("_").join(" ");
		return (
			<li styleName="entry">
				<div styleName="imgContainer">
					<Link to={`/${projTitle}`}>
						<img src={imgUrl} alt={imgTitle} />
						<h1 styleName="title">{title}</h1>
					</Link>
				</div>
			</li>
		);
	}
}

export default CssModules(ProjectEntry, styles);
