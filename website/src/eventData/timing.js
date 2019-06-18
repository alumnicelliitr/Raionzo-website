import React, { Component } from 'react';
import './panel.css';
import date from '../components/images/Date.png'
import time from '../components/images/time.png'
import map from '../components/images/map.png'
import contact from '../components/images/contact.png'

function timing(props) {
	if(props.page==1)
		return(
			 <div className='timing'>
			     <div className ='IA'>
			         <p className='nam'>International Affairs of India</p>
			         <div className='nam2'>
			             <p className='dat dd'>31 August<br/>2 PM</p>
			             <p className='dat dd1'>MAC</p>
			         </div>
			     </div>
			     <div className ='IA'>
			         <p className='nam'>Women in Tech</p>
			         <div className='nam2'>
			             <p className='dat dd'>1 September<br/>10 AM</p>
			         </div>
			     </div>
			 </div>
		);
	    return ( 
	         <div className='timing'>
	             <div className='date'>
	                 <img className='timing-icons' src={date}></img>
	                 <p className='nam'>Date</p>
	                 <p className='dat'>{props.date}</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons' src={time}></img>
	                 <p className='nam'>Time</p>
	                 <p className='dat'>{props.time}</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons spec' src={map}></img>
	                 <p className='nam'>Venue</p>
	                 <p className='dat'>MAC IIT,<br/>Roorkee</p>
	             </div>
	             <div className='date'>
	                 <img className='timing-icons' src={contact}></img>
	                 <p className='nam'>Contact</p>
	                 <p className='dat'>9833020496,<br/>9833020496</p>
	             </div>    
	         </div>
		    );

}

export default timing;