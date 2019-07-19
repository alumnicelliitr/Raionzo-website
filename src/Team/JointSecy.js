import React, { Component } from 'react';

function JointSecretaries () {
	return(
		<div className="jointsecy-maincontainer">
			<JointSecy name="Hitendra Singh" post="OPERATIONS" image="" />
			<div className="jointsecy-head">JOINT SECRETARIES</div>
			<JointSecy name="Akshay Vairagade" post="OPERATIONS" image="" />
			<JointSecy name="Navneet Chauhan" post="CONTENT" image="" />
			<JointSecy name="Avinash Garg" post="DESIGN" image="" />
			<JointSecy name="Aniket Mathur" post="TECH" image="" />
		</div>
	);
}

function JointSecy (props) {
	return(
		<div className="jointsecy-container">
			<div className="jointsecy-img"><img src={props.image} /></div>
			<div className="jointsecy-info">
				<div className="jointsecy-name">{props.name}</div>
				<div className="jointsecy-post">{props.post}</div>
			</div>
		</div>
	);
}

export default JointSecretaries;