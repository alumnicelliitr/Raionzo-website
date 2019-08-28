import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';
import img8 from '../components/images/ltgen.jpeg';


class EventMainContainer extends React.Component{
	state={
	num:5,
	date:'31 August',
	time:'11:30 AM',
  venue: 'MAC Audi'
};

openLink(){
    window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
  }
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata="The inaugural ceremony of the fest will begin 
   with talks by the Director of IITR and the DORA, IITR. This 
   will be followed by a talk delivered by alumni mainly focusing 
   on the leadership skills where the alumni will also share their 
   experiences. The main purpose of the talk is to inculcate 
   Leadership skills within the students and also to provide guidance 
   to freshers about how to spend their time effectively during their 
   stay at IITR."
   eventcontainerheading="Leadership Talks"
   eventcontainerbutton="Speakers"
   eventcontainericon="five"
   disp="none"  />
   <div>
	    <Panelicons  two={this.state.num}/>
	    <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}
              venue={this.state.venue}/>
    </div>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
      <div className="item active">
         <Speaker speakername="Retd. Lt. Gen. Vishwambhar Singh" speakercontent="Retired Lieutenant General" speakerimg={img8} />
        </div>
        <div className="item">
         <Speaker speakername="Rajiv Yadav" speakercontent="Chairman, Brahmaputra Board, Government of India" speakerimg="https://media.licdn.com/dms/image/C4D03AQFMXFiYjMKvdw/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=2r6G9Qgcm5FdkiPnQvBbpb5F18lNSat8kKC5JGsrLuY" />
        </div>
        <div className="item">
         <Speaker speakername="Dr. Nirmaljeet Singh Kalsi" speakercontent="Additional Chief secretary (Govt of Punjab)" speakerimg="https://media.licdn.com/dms/image/C5103AQEB-ROhiGBP6w/profile-displayphoto-shrink_800_800/0?e=1570060800&v=beta&t=HQJJaMcMOTp7OTg3JHq7sogSthNOta_HSie64Qsl-sc" />
        </div>
        <a className="left carousel-control car-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left control-but"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control car-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right control-but"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
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
