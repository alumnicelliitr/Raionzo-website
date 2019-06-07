import React, { Component } from 'react';
import raionzoLogo from './images/raionzologo.png';
import './css/NavBar.css';

class NavBar extends Component {
	render(){
		return(
			<div className="nav-bar">
			<img className="raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" />
			<div className="head">Raionzo</div>
			<div className="nav-links">
				<NavLink name="Home" />
				<NavLink name="Events" />
				<NavLink name="Schedule" />
				<NavLink name="Contact Us" />

			</div>
			
			<div className="reg-link">Register</div>
			</div>
		);
	}
}

function NavLink(props){
	return(
		<div className="nav-link">
			{props.name}
		</div>
	);
}

export default NavBar;