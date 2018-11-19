import React, { Component } from "react";
import { Link } from "react-router-dom";
import CssModules from "react-css-modules";
import styles from "./ProjectEntry.css";

class ProjectEntry extends Component {
	render() {
		const { projTitle, imgTitle, imgUrl } = this.props;
		return (
			<li styleName="entry">
				<div styleName="imgContainer">
					<Link to={`/${projTitle}`}>
						<img src={imgUrl} alt={imgTitle} />
					</Link>
				</div>
			</li>
		);
	}
}

export default CssModules(ProjectEntry, styles);
