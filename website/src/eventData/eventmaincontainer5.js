import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';

class EventMainContainer extends React.Component{
	state={
	num:5,
	date:'31 August',
	time:'10 AM'
};
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata="  The inaugural ceremony of the fest will begin with talks by the Director of IITR and the DORA, IITR. This will be followed by a talk delivered by alumni mainly focusing on leadership skills where the alumni also share their experiences. The purpose of the talk is to inculcate Leadership skills within the students and also the guidance to freshers about how to spend their time effectively during their journey of IITR."
   eventcontainerheading="Leadership Talks"
   eventcontainerbutton="Panelist"
   eventcontainericon="five"  />
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
