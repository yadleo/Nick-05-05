import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./HeaderNav.css";

class HeaderNav extends Component {
	render() {
		return (
			<div styleName="container">
				<div>work</div>
				<div>info</div>
			</div>
		);
	}
}

export default CssModules(HeaderNav, styles);
