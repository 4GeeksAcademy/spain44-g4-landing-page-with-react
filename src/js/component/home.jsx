import React from "react";
import Navbar from './Navbar'
import { Jumbotron } from './Jumbotron'
import { CardComponent } from './CardComponent.jsx'
import { FotterComponent } from './FotterComponent.jsx'
import { prideCards } from "../data/cardsInfo";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<CardComponent prideCards={prideCards} />
			<FotterComponent />
		</>
	);
};

export default Home;
