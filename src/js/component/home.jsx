import React from "react";
import Navbar from './Navbar'
import { Jumbotron } from './Jumbotron'
import { CardComponent } from './CardComponent.jsx'
import { FotterComponent } from './FotterComponent.jsx'


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />

			<Jumbotron />
			<CardComponent />


			<FotterComponent />
		</>
	);
};

export default Home;
