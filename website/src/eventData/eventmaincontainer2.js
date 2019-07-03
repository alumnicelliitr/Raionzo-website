import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';

class EventMainContainer extends React.Component{
	state={
	num:2,
	date:'01 September',
	time:'2 PM'
};
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" The 3rd and 4th years of engineering are very crucial in a student’s career as they appear for interns and placements.
Every step plays an important role, hence, a talk where the
alumni guide them about the dos and don'ts is organized."
   eventcontainerheading="Placement and Internship
Talk"
   eventcontainerbutton="Speaker"
   eventcontainericon="paneldiscussion"  />
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
