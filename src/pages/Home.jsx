import "./Home.scss";
import React from "react";

class Home extends React.Component {
	render() {
		return (
			<div className="Home">
				<h1 className="Home-title">Baraki</h1>
				<p className="Home-p">Baraki is your to go to app,
					 for when you are looking for your favorite cocktail recipe,
					or for when you are not sure what you want to drink,
					 but you know for sure what ingredients you have available,
					Baraki will help you make the best out of what you have!</p>
			</div>
		);
	}
}

export default Home;
