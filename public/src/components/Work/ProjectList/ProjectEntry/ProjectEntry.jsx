import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectEntry.css";

class ProjectEntry extends Component {
	render() {
		const { title, imgUrl } = this.props;
		return (
			<li styleName="entry">
				<div styleName="imgContainer">
					<img src={imgUrl} alt={title} />
				</div>
			</li>
		);
	}
}

export default CssModules(ProjectEntry, styles);
