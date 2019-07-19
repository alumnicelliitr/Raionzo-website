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
				RAIONZO gives alumni an opportunity to share their treasured experiences with 
				students who are about to step into the corporate world in a few years thus guiding 
				them towards a better and bright future.
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
					<div>Speakers</div>
					<Link to="/Events/"><div>Register</div></Link>
					<Link to="/Events/"><div className="events-in-links">Events</div></Link>
					<div>About Us</div>
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
					<Link to="/LT/"><div>Leadership talk</div></Link>
					<Link to="/PD/"><div>Panel discussions</div></Link>
					<Link to="/PIT/"><div>Placement and Internship talk</div></Link>
					<Link to="/IPC/"><div>Idea pitch competition</div></Link>
					<Link to="/CN/"><div>Cultural night</div></Link>
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
							<td className="footer-contact-data">Raionzo Office, Student Activity Centre, IIT Roorkee, Uttrakhand, India</td>
						</tr>
						<tr>
							<td className="footer-contact-data"><img src={footerno} alt="Phone" className="contact-img" /></td>
							<td className="footer-contact-data" id="phoneNo">
								<div className="conatct-no">+91 8120792558</div>
								<div className="conatct-no">+91 8889379722</div>
							</td>
						</tr>
						<tr>
							<td className="footer-contact-data"><img src={footerweb} alt="Website" className="contact-img" /></td>
							<Link to="/ContactUs/" className="footer-contact-data">Mail Us</Link>
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
					<img src={footerfb} alt="Facebook" className="follow-img" />
					<img src={footerlinkedin} alt="LinkedIn" className="follow-img" />
				</div>
			</div>
		</div>
	);
}

export default Footer;