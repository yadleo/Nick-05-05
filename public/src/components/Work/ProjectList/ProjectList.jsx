import React, { Component } from "react";
import CssModules from "react-css-modules";
import styles from "./ProjectList.css";
import ProjectEntry from "./ProjectEntry/ProjectEntry";

class ProjectList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			entries: [
				{
					title: "Capture_2",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542561841/Nick%2005-05/Capture_2.jpg"
				},
				{
					title: "the100_s5credits",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542561846/Nick%2005-05/the100_s5credits_0015.jpg"
				},
				{
					title: "CRA_P_1028eyeliner_A01_s",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542561841/Nick%2005-05/CRA_P_1028eyeliner_A01_s.jpg"
				},
				{
					title: "DSC_0948_2",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542561844/Nick%2005-05/DSC_0948_2.png"
				}
			]
		};
	}
	// map ProjectEntry
	render() {
		let entries = this.state.entries;
		return (
			<div styleName="mainWrapper">
				<ul styleName="projectList">
					{entries.map((entry, idx) => {
						return (
							<ProjectEntry
								key={`${entry.title}-${idx}`}
								title={entry.title}
								imgUrl={entry.imgUrl}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default CssModules(ProjectList, styles);
