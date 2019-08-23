import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {

	const [character, setCharacter] = useState([])
	useEffect(() => {
		const getCharacters = () => {
			axios
				.get('https://rickandmortyapi.com/api/character/'
				)
				.then(response => {
					setCharacter(response.data.results);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		}
		getCharacters();
	}, []);

	return (
		<div className="grid-view">
			{character.map(characters => {
				return <CharacterCard key={characters.id} characters={characters} />;
			})}
		</div>

	)


}

