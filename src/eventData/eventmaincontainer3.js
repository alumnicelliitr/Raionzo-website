import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';

class EventMainContainer extends React.Component{
	state={
	num:3,
	date:'31 August',
	time:'2:00 - 5:00 PM'
};

openLink(){
    window.open("", "_blank");
  }
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" The competition is open to all IITR students, where the
students send in amusing, creative and feasible ideas for new
initiatives to increase student-alumni interaction in the
upcoming years. The most feasible idea wins!"
   eventcontainerheading="Idea Pitch Competition"
   eventcontainerbutton="Judges"
   eventcontainericon="three"  />
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
                <div onClick={this.openLink} className="event-register-button">
                  Register
                </div>
              </div>
		</div>
  );
}
}

export default EventMainContainer;
