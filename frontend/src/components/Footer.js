import React, { Component } from 'react';
import footeradd from './images/footeradd.png';
import footerno from './images/footerno.png';
import footerweb from './images/footerweb.png';
import footerfb from './images/footerfb.png';
import footerlinkedin from './images/footerlinkedin.png';
import './css/Footer.css';
import {Link} from "react-router-dom";

class Footer extends Component{
	render(){
		return(
			<div className="footer">
				<Raionzo2019 />
				<UsefulLinks />
				<Events />
				<Contact />
				<Follow />
			</div>
		);
	}
}

function Raionzo2019() {
	return(
		<div className="footer-raionzo footer-child-1 grid-item">
			<div className="footer-raionzo-head">
				Raionzo 2019
			</div>
			<div className="footer-raionzo-cont footer-cont-all">
				RAIONZO gives alumni an opportunity to share their treasured 
				experiences with students who are about to step into the corporate 
				world in a few years. It is an excellent platform to cultivate 
				your skills from the experiences of our notable alumni.
			</div>
		</div>
	);
}

function UsefulLinks() {
	return(
		<div className="footer-links footer-child-1 grid-item">
			<div className="footer-links-head footer-subhead">
				Useful Links
			</div>
			<div className="footer-links-cont footer-cont-all">
				<div className="footer-list footer-list-links">
					<Link to="/schedule/"><div>Schedule</div></Link>
					<Link to="/speaker/"><div>Speakers</div></Link>
					<Link to="/Events/"><div>Register</div></Link>
					<Link to="/Events/"><div className="events-in-links">Events</div></Link>
					<Link to="/ContactUs/"><div>Contact Us</div></Link>
				</div>
			</div>
		</div>
	);
}

function Events() {
	return(
		<div className="footer-events footer-child-1 grid-item">
			<div className="footer-events-head footer-subhead">
				Events
			</div>
			<div className="footer-events-cont footer-cont-all">
				<div className="footer-list footer-list-events">
				<Link to="/GIW/"><div>Group interactions and workshops</div></Link>
					<Link to="/LT/"><div>Leadership talks</div></Link>
					<Link to="/PD/"><div>Panel discussions</div></Link>
					<Link to="/PIT/"><div>Placement and Internship talk</div></Link>
					<Link to="/IPC/"><div>Idea-pitch competition</div></Link>
					<Link to="/CN/"><div>Cultural Night</div></Link>
				</div>
			</div>
		</div>
	);
}

function Contact() {
	return(
		<div className="footer-contact footer-child-1 grid-item">
			<div className="footer-contact-cont footer-cont-all">
				<table>
					<tbody>
						<tr>
							<td className="footer-contact-data"><img src={footeradd} alt="Location" className="contact-img" /></td>
							<td className="footer-contact-data">Raionzo Office, Student Activity Centre, IIT Roorkee, Uttarakhand, India</td>
						</tr>
						<tr>
							<td className="footer-contact-data"><img src={footerno} alt="Phone" className="contact-img" /></td>
							<td className="footer-contact-data" id="phoneNo">
								<div className="conatct-no"><b>Jay Modi (Convener)</b><br />+91 8120792558</div>
								<div className="conatct-no"><b>Manshish Agrawal (Co-Convener)</b><br />+91 8889379722</div>
								<div className="conatct-no"><b>Hitendra Singh (Co-Convener)</b><br />+91 7023513035</div>
							</td>
						</tr>
						<tr>
							<td className="footer-contact-data"><img src={footerweb} alt="Website" className="contact-img" /></td>
							<Link to="/ContactUs/" className="footer-contact-data mail">Mail Us</Link>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}


function Follow() {
	return(
		<div className="footer-follow footer-child-1 grid-item">
			<div className="footer-follow-cont footer-cont-all">
				Follow us on
				<div className="follow-links">
				<a href='https://www.facebook.com/alumnicelliitr/'>
					<img  src={footerfb} alt="Facebook" className="follow-img" />
					</a>
				<a href='https://www.linkedin.com/school/iarciitr/'>	
					<img src={footerlinkedin} alt="LinkedIn" className="follow-img" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Footer;