import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./HeaderLogo.css";

class HeaderLogo extends Component {
	render() {
		return (
			<a styleName="container" aria-label="Nick-05-05 Back to Home" href="/">
				<img
					styleName="logo"
					src="https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542604235/Nick%2005-05/logo_NL_v01.png"
					alt="Nick-05-05"
				/>
			</a>
		);
	}
}

export default CssModules(HeaderLogo, styles);
