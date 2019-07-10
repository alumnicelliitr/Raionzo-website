import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';

class EventMainContainer extends React.Component{
	state={
	num:6,
	date:'31 August',
	time:'7:00 PM Onwards '
};
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" The event ends with a delightful cultural night organized by the
students followed by a valedictory session."
   eventcontainerheading="Cultural Night"
   eventcontainerbutton="Performers"
   eventcontainericon="six"  />
   <div>
	    <Panelicons  two={this.state.num}/>
	    <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}/>
    </div>
    <Speaker speakername="Ishant Sharma" speakercontent="asjdhq qqqqq qqqqqqqqqqqqqq qqqqqqqqqqqq qqqqqqqqqqqqqqqq qqqqqqqqqq qqqqqq qqqqqqqqqqq qqqqqqqqqqqqq" speakerimg="one" />

              <div className="event-register">
                <div className="event-register-text">
                  To take part in this event
                </div>
                <div className="event-register-button">
                  Register Now
                </div>
              </div>
		</div>
  );
}
}

export default EventMainContainer;
