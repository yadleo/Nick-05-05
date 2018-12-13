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
					projTitle: "the_100_season_5_opening",
					imgTitle: "the100_s5credits",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544717154/Nick%2005-05/imgs/the100_thumbnail.png",
					gifUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544716700/Nick%2005-05/gifs/the100.gif"
				},
				{
					projTitle: "leap",
					imgTitle: "Leap",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544717155/Nick%2005-05/imgs/leap_thumbnail.png",
					gifUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544716707/Nick%2005-05/gifs/leap.gif"
				},
				{
					projTitle: "old_boy_title_sequence",
					imgTitle: "Capture_2",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544717158/Nick%2005-05/imgs/oldboy_thumbnail.png",
					gifUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544716705/Nick%2005-05/gifs/oldboy.gif"
				},
				{
					projTitle: "1028_ultimate_ex_eyeliner_spot",
					imgTitle: "CRA_P_1028eyeliner_A01_s",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544717155/Nick%2005-05/imgs/1028_thumbnail.png",
					gifUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544716703/Nick%2005-05/gifs/1028.gif"
				},
				{
					projTitle: "image_comics",
					imgTitle: "Image_Comics",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544717157/Nick%2005-05/imgs/image_thumbnail.png",
					gifUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1544717157/Nick%2005-05/imgs/image_thumbnail.png"
				},
				{
					projTitle: "formulation_exhibit_book",
					imgTitle: "DSC_0948_2",
					imgUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/imgs/formulations_edit_05.jpg",
					gifUrl:
						"https://res.cloudinary.com/dqhe5ks7u/image/upload/v1542623432/Nick%2005-05/imgs/formulations_edit_05.jpg"
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
								gifUrl={entry.gifUrl}
							/>
						);
					})}
				</ul>
			</div>
		);
	}
}

export default CssModules(ProjectList, styles);
