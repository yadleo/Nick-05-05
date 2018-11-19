import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CssModules from "react-css-modules";
import styles from "./App.css";
import Header from "./Header/Header";
import Work from "./Work/Work";
import Info from "./Info/Info";

class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<HashRouter>
				<div styleName="appFrame">
					<Header />
					<Switch>
						<Route exact path="/" component={Work} />
						<Route path="/work" component={Work} />
						<Route path="/info" component={Info} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default CssModules(App, styles);
