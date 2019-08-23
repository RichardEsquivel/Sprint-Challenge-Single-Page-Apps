import React from "react";
import { Cards } from './styles';




export default function EpisodeCard(props) {
	const { episodes } = props;
	return (
		<Cards>
			<div>

				<h1> ID #: {episodes.id}</h1>
				<h2>Name: {episodes.name}</h2>
				<h2>Episode #: {episodes.episode}</h2>
			</div>
		</Cards>


	)
};