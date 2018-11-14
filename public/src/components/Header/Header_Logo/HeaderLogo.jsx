import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./HeaderLogo.css";

class HeaderLogo extends Component {
	render() {
		return <div className="container">logo goes here</div>;
	}
}

export default CssModules(HeaderLogo, styles);
