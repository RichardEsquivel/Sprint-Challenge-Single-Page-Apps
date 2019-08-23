import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from "./LocationCard";

export default function LocationsList() {

	const [location, setLocation] = useState([])
	useEffect(() => {
		const getLocation = () => {
			axios
				.get('https://rickandmortyapi.com/api/location/'
				)
				.then(response => {
					setLocation(response.data.results);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		}
		getLocation();
	}, []);

	return (
		<div className="grid-view">
			{location.map(locations => {
				return <LocationCard key={locations.id} locations={locations} />;

			})}
		</div>

	)


}















