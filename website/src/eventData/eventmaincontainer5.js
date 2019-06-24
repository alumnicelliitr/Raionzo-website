import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import  EventComponent1  from './eventcomponent1.js';

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
   eventinfodata=" Panel discussions on the topics “International Affairs of India” and “Women in Tech” where the audience is exposed to new viewpoints and perspectives."
   eventcontainerheading="Panel Discussion"
   eventcontainerbutton="Panelist"
   eventcontainericon="paneldiscussion"  />
   <div>
	    <Panelicons  two={this.state.num}/>
	    <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}/>
    </div>
		</div>
  );
}
}

export default EventMainContainer;
