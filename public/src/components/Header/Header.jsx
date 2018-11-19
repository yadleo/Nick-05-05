import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./Header.css";
import HeaderNav from "./Header_Nav/HeaderNav";
import HeaderLogo from "./Header_Logo/HeaderLogo";

class Header extends Component {
	render() {
		return (
			<header styleName="headerMain">
				<div styleName="headerContainer">
					<HeaderLogo />
					<HeaderNav />
				</div>
			</header>
		);
	}
}

export default CssModules(Header, styles);
