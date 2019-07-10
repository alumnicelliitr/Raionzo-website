import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';

class EventMainContainer extends React.Component{
	state={
	num:4,
  date:'31 August',
  time:'3-7 PM'
};

openLink(){
    window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
  }
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata="This 2-day event aims for direct student-alumni interaction.
 Different batches of students will be mentored by alumni
 while they finish the given task. The workshops will cover
 Finance, ML/AI, UX/UI and Web-D.
 The students benefit by gaining experience in these fields
 and spending quality time with alumni. The alumni get an
 excellent opportunity to share their past experiences with
 the students."
   eventcontainerheading="Group Interactions and
Workshops"
   eventcontainerbutton="Speakers"
   eventcontainericon="four"  />
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
