import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import Speaker from './speaker.js';
import  EventComponent1  from './eventcomponent1.js';


class EventMainContainer extends React.Component{
	state={
	 num:1,
    date:'31 August',
    time:'10 AM'
  };

  openLink(){
    window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
  }

  render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" Panel discussions on the topics “International Affairs of India” and “Women in Tech” where the audience is exposed to new viewpoints and perspectives."
   eventcontainerheading="Panel Discussion"
   eventcontainerbutton="Panelists"
   eventcontainericon="one"  />
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
         <Speaker speakername="Ishant Sharma" speakercontent="asjdhq qqqqq qqqqqqqqqqqqqq qqqqqqqqqqqq qqqqqqqqqqqqqqqq qqqqqqqqqq qqqqqq qqqqqqqqqqq qqqqqqqqqqqqq" speakerimg="one" />
        </div>
        <div className="item">
         <Speaker speakername="Ishant Sharm" speakercontent="asjdhq qqqqq qqqqqqqqqqqqqq qqqqqqqqqqqq qqqqqqqqqqqqqqqq qqqqqqqqqq qqqqqq qqqqqqqqqqq qqqqqqqqqqqqq" speakerimg="one" />
        </div>
        <div className="item">
         <Speaker speakername="Ishant Shar" speakercontent="asjdhq qqqqq qqqqqqqqqqqqqq qqqqqqqqqqqq qqqqqqqqqqqqqqqq qqqqqqqqqq qqqqqq qqqqqqqqqqq qqqqqqqqqqqqq" speakerimg="one" />
        </div>
        <div className="item">
         <Speaker speakername="Ishant Sha" speakercontent="asjdhq qqqqq qqqqqqqqqqqqqq qqqqqqqqqqqq qqqqqqqqqqqqqqqq qqqqqqqqqq qqqqqq qqqqqqqqqqq qqqqqqqqqqqqq" speakerimg="one" />
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
