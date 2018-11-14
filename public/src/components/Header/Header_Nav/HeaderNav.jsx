import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./HeaderNav.css";

class HeaderNav extends Component {
	render() {
		return (
			<div className="container">
				<div className="NavItem">work</div>
				<div className="NavItem">info</div>
			</div>
		);
	}
}

export default CssModules(HeaderNav, styles);
