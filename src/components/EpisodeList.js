import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {

	const [episode, setEpisode] = useState([])
	useEffect(() => {
		const getEpisode = () => {
			axios
				.get('https://rickandmortyapi.com/api/episode/'
				)
				.then(response => {
					setEpisode(response.data.results);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		}
		getEpisode();
	}, []);

	return (
		<div className="grid-view">
			{episodes.map(episodes => {
				return <EpisodeCard key={episodes.id} episodes={episodes} />;

			})}
		</div>

	)


}