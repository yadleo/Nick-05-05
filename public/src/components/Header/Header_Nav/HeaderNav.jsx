import React, { Component } from "react";
import { Link } from "react-router-dom";
import CssModules from "react-css-modules";
import styles from "./HeaderNav.css";

class HeaderNav extends Component {
	render() {
		return (
			<div styleName="container">
				<Link to="/work">work</Link>
				<Link to="/info">info</Link>
			</div>
		);
	}
}

export default CssModules(HeaderNav, styles);
