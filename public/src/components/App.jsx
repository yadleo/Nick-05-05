import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CssModules from "react-css-modules";
import styles from "./App.css";
import Header from "./Header/Header";
import Work from "./Work/Work";
import Info from "./Info/Info";
import OldBoyTitleSeq from "./Projects/OldBoyTitleSeq";
import OneHundredSeasonFiveOpening from "./Projects/OneHundredSeasonFiveOpening";
import UltimateExEyelinerSpot from "./Projects/UltimateExEyelinerSpot";
import FormulationExhibitBook from "./Projects/FormulationExhibitBook";
import Leap from "./Projects/Leap";
import ImageComics from "./Projects/ImageComics";

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
						<Route path="/old_boy_title_sequence" component={OldBoyTitleSeq} />
						<Route
							path="/the_100_season_5_opening"
							component={OneHundredSeasonFiveOpening}
						/>
						<Route
							path="/1028_ultimate_ex_eyeliner_spot"
							component={UltimateExEyelinerSpot}
						/>
						<Route
							path="/formulation_exhibit_book"
							component={FormulationExhibitBook}
						/>
						<Route path="/leap" component={Leap} />
						<Route path="/image_comics" component={ImageComics} />
					</Switch>
				</div>
			</HashRouter>
		);
	}
}

export default CssModules(App, styles);
