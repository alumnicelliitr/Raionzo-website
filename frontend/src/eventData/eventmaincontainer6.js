import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';
import Speaker from './speaker.js';

class EventMainContainer extends React.Component{
	state={
	num:6,
	date:'1st September',
	time:'7:00 PM Onwards ',
  venue: 'MAC Audi'
};

openLink(){
    window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
  }
    render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" The event ends with a delightful cultural night organized by the
students followed by a valedictory session."
   eventcontainerheading="Cultural Night"
   eventcontainerbutton="Performers"
   eventcontainericon="six"
   disp="none"
   disp1="none"  />
   <div>
	    <Panelicons  two={this.state.num}/>
	    <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}
              venue={this.state.venue}/>
    </div>
		</div>
  );
}
}

export default EventMainContainer;
