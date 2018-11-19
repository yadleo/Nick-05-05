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
					projTitle: "old_boy_title_sequence",
					imgTitle: "Capture_2",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542658322/Nick%2005-05/gifs/oldboy_960px.gif"
				},
				{
					projTitle: "the_100_season_5_opening",
					imgTitle: "the100_s5credits",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542659405/Nick%2005-05/gifs/the100_960px_2.gif"
				},
				{
					projTitle: "1028_ultimate_ex_eyeliner_spot",
					imgTitle: "CRA_P_1028eyeliner_A01_s",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542658324/Nick%2005-05/gifs/1028_960px.gif"
				},
				{
					projTitle: "formulation_exhibit_book",
					imgTitle: "DSC_0948_2",
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
								key={`${entry.projTitle}-${idx}`}
								projTitle={entry.projTitle}
								imgTitle={entry.imgTitle}
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
