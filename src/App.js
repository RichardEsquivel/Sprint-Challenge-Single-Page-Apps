import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
import EpisodeList from "./components/EpisodeList.js";
import LocationsList from "./components/LocationsList.js";

import { NavLink, Route } from 'react-router-dom';



export default function App() {
	return (
		<main>
			<Header />
			<div>
				<ul className="navbar">
					<li>
						<NavLink exact to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/characters">Characters</NavLink>
					</li>
					<li>
						<NavLink to="/episodes">Episodes</NavLink>
					</li>
					<li>
						<NavLink to="/locations">Locations</NavLink>
					</li>
				</ul>
				<Route exact path="/" component={WelcomePage} />
				<Route path="/characters" component={CharacterList} />
				<Route path="/episodes" component={EpisodeList} />
				<Route path="/locations" component={LocationsList} />

			</div>
		</main>

	);
}
