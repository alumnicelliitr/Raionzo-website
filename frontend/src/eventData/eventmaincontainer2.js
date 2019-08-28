import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';
import img5 from '../components/images/nitesh.jpeg'

class EventMainContainer extends React.Component{
	state={
	num:2,
	date:'1st September',
	time:'2 PM',
  venue:'MAC Audi'
};

openLink(){
    window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
  }
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" We all are aware of the fact that pre-final year 
   & final year of engineering are very crucial in a student’s career 
   as it brings the season for internships & placements respectively. 
   This talk consists of all the major perspectives to guide students 
   regarding placements & internships and to make them aware of the dos 
   and don'ts of the process."
   eventcontainerheading="Placement and Internship Talk"
   eventcontainerbutton="Speaker"
   eventcontainericon="two"
   disp="none"  />
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
         <Speaker speakername="Himanshu Sirohi" purp="On Campus Internship" speakercontent="Director, Digital Marketing, JLL" speakerimg="https://media.licdn.com/dms/image/C5603AQGBgEi7NRqqnQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=p4mpvBFU-raNhy60zEeBLTcMJKpo-XoYqZZ2BzF-QEc" />
        </div>
        <div className="item">
         <Speaker speakername="Nitesh Jain" purp="On Campus Placement" speakercontent="Business Strategy | Paytm" speakerimg={img5} />
        </div>
        <div className="item">
         <Speaker speakername="Varun Goel" purp="Off campus Internship and Placement" speakercontent="Dr. Manager (HR) | BHEL, Haridwar" speakerimg="https://media.licdn.com/dms/image/C4D03AQGeJnUCBcCJhA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=4nXV_5ez4realEXeJLiDr-QEBjUc-AAyM1JpsRdWjhQ" />
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
