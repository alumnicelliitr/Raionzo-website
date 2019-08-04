import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';
import img3 from '../components/images/rajnish.jpeg';
import img from '../components/images/dinesh pawar.jpeg';
import ideapitch from '../components/docs/Idea-pitch.pdf';


class EventMainContainer extends React.Component{
	state={
	num:3,
	date:'1st September',
	time:'10 AM',
  venue:'LH'
};

openLink(){
    window.open("https://forms.gle/wRKoVb8BhQUKVWj96", "_blank");
  }
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata={`The competition is open to all IITR students, where 
   the students submit amusing, creative and feasible ideas for new 
   initiatives to increase student-alumni interaction in the upcoming 
   years. The most feasible & practical idea wins the reward, worth Rs <b>49,000/-</b>. 
   You can find the link to guidelines <a style="color: #E7A908" href=${ideapitch} target='_blank' > here </a>`}
   eventcontainerheading="Idea-Pitch Competition"
   eventcontainerbutton="Judges"
   eventcontainericon="three"
   details={ideapitch}  />
   <div>
	    <Panelicons  two={this.state.num}/>
	    <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}
              venue={this.state.venue}/>
    </div>
<div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators car-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="item active">
        <Speaker speakername="Rajnish Khandelwal" speakercontent="Director KIE Engineering" speakerimg={img3} />
        </div>
        <div className="item">
         <Speaker speakername="Rachna Singh" speakercontent="Innovation and Strategy Coach" speakerimg="https://media.licdn.com/dms/image/C4E03AQEXZkzs41jNwg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=Jg1ZrW6gHOH1uMzqi2MRhawmRqXGrMdjJ0G-d7UAiHE" />
        </div>
        <div className="item">
         <Speaker speakername="Dinesh Pawar" speakercontent="Alumni Association Member and Entrepreneur" speakerimg={img} />
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
