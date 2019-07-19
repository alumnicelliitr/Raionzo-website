import React, { Component } from 'react';

function Members () {
	return(
		<div className="members-maincontainer">
			<div className="members-head">Members</div>
			<div className="members-list">
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
				<Member name="" image="" />
			</div>
		</div>
	);
}

function Member (props) {
	return(
		<div className="member-conatiner">
			<div className="member-img"><img src={props.image} /></div>
			<div className="member-name">{props.name}</div>
		</div>
	);
}

export default Members;