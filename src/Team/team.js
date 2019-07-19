import React, { Component } from 'react';
import CONTAINER1 from '../Home/container_1';
import './team.css';
import JointSecretaries from './JointSecy.js';
import Members from './Members.js';

class Team extends Component{
	render(){
		return(
			<div className="team-maincontainer">
				<CONTAINER1 heading="Our Team" colr="white" />
				<Secretary name="Rithyma Yellamati" image="" />
				<AddSecretary name1="Manshish Agrawal" name2="Jay Modi" image1="" image2="" />
				<JointSecretaries />
				<Members />
			</div>
		);
	}
}

function Secretary (props) {
	return(
		<div className="secy-maincontainer">
			<div className="secy-info">
				<div className="secy-name">{props.name}</div>
				<div className="secy-post">Secretary</div>
			</div>
			<div className="secy-img"><img src={props.image} /></div>
		</div>
	);
}

function AddSecretary (props) {
	return(
		<div className="addsecy-maincontainer">
			<div className="addsecy-info-1 addsecy-info">
				<div className="addsecy-name">{props.name1}</div>
				<div className="addsecy-post">Additional Secretary</div>
			</div>
			<div className="addsecy-imgs">
				<div className="addsecy-img-1 addsecy-img"><img src={props.image1} /></div>
				<div className="addsecy-img-1 addsecy-img"><img src={props.image2} /></div>
			</div>
			<div className="addsecy-info-2 addsecy-info">
				<div className="addsecy-name">{props.name2}</div>
				<div className="addsecy-post">Additional Secretary</div>
			</div>
		</div>
	);
}

export default Team;