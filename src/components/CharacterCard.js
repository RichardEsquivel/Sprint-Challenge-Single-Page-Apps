import React from "react";
import { Cards } from './styles';




export default function CharacterCard(props) {
	const { characters } = props;
	return (



		<Cards>
			<div>
				<img src={characters.image} />
				<h1> Alias: {characters.name}</h1>
				<h2>Status: {characters.status}</h2>
				<h2>Species: {characters.species}</h2>
				<h2>Location: {characters.location.name}</h2>
			</div>
		</Cards>


	)
};
