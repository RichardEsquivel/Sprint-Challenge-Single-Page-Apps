import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage";
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
						<NavLink to="/characters">characters</NavLink>
					</li>
				</ul>
				<Route exact path="/" component={WelcomePage} />
				<Route path="/characters" component={CharacterList} />
			</div>
		</main>

	);
}
