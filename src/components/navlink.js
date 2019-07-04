import React from 'react';
import './css/navlink.css'


function Navlink(props){
	return(
		<div className="nav-link">
			{props.name}
		</div>
	);
}
export default Navlink;