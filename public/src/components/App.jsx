import React, { Component } from "react";
import Header from "./Header/Header";
import Reel from "./Reel/Reel";
import ProjectList from "./ProjectList/ProjectList";

export default class App extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<Header />
				<Reel />
				<ProjectList />
			</div>
		);
	}
}
