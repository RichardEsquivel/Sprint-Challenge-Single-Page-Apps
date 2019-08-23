import React from "react";
import CharacterList from "./CharacterList";

export default function CharacterCard(props) {
	const { characters } = props;
	return (
		<div>
			<img src={characters.image} />
			<h1> {characters.name}</h1>
			<p>{characters.species}</p>
			<h2>{characters.location.name}</h2>
		</div>
	)
};
