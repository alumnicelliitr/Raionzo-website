import React from 'react';
import './css/navlink.css'


function NavLink(props){
	return(
		<div className="nav-link">
			{props.name}
		</div>
	);
}
export default NavLink;