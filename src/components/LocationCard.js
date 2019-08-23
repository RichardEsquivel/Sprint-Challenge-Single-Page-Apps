import React from "react";
import { Cards } from './styles';

export default function LocationCard(props) {
	const { locations } = props;
	return (
		<Cards>
			<div>

				<h1> Name: {locations.name}</h1>
				<h2>Type: {locations.type}</h2>
				<h2>Dimension: {locations.dimension}</h2>
			</div>
		</Cards>


	)
};