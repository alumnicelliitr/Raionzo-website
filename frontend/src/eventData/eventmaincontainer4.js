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
   eventinfodata="This 2-day event aims for direct student-alumni interaction 
   where different batches of students will be mentored by alumni while they 
   finish the given task. The workshops will cover Finance, ML, UX/UI and Web-D. 
   The students will be benefited by gaining experience in these fields and 
   spending quality time with the alumni. Simultaneously, the alumni will get 
   an excellent opportunity to share their past experiences with the students."
   eventcontainerheading="Group Interactions and Workshops"
   eventcontainerbutton="Speakers"
   eventcontainericon="four"
   disp="none"  />
   <div>
	    <Panelicons  two={this.state.num}/>
	    <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}/>
    </div>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators car-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner">
        <div className="item active">
        <Speaker speakername="Viraj Verma" speakercontent="UX Designer | Microsoft" purp="Design Workshop" speakerimg="https://media.licdn.com/dms/image/C5103AQGt8ltIquWWzQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=Q-fWhdHPdP6hJYQhxaVc5aeWJWuqcH-3ljJD1AMp0jc" />
        </div>
        <div className="item">
         <Speaker speakername="Raj Garg" speakercontent="Founder CTO Chariot" purp="Web-D Workshop" speakerimg="https://media.licdn.com/dms/image/C4E03AQGni2nohgq6rw/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=Kxbw44AdFIqwkvLCHbR1nIGMuuKKtLLH3yqAYoF_5qY" />
        </div>
        <div className="item">
         <Speaker speakername="Vishnu Rajoriya" speakercontent="Data Scientist | Decision Point Analytics" purp="Machine Learning Workshop" speakerimg="https://media.licdn.com/dms/image/C5603AQHPjb3cxHn4Ow/profile-displayphoto-shrink_800_800/0?e=1572480000&v=beta&t=QNDXuTLEdUuMP7OQ4a3GVyamD6CfcctLQgWZp-wouEI" />
        </div>
        <div className="item">
         <Speaker speakername="Sachin Kumar Tyagi" speakercontent="Business Development Manager, HSBC Global | FMS | CFA L2" purp="Finance Workshop" speakerimg="https://media.licdn.com/dms/image/C5103AQELyRrLTSJoJA/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=Yh_Kqzps55LT-HMUPOn69GNETh2J1oxH84E-3_xUnXE" />
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
