
import React from 'react';
import './eventmaincontainer.css';
import  EventComponent1  from './eventcomponent1.js';

class EventMainContainer extends React.Component{
    render(){
  return (
  <EventComponent1 
   eventinfodata=" Panel discussions on the topics “International Affairs of India” and “Women in Tech” where the audience is exposed to new viewpoints and perspectives."
   eventcontainerheading="Panel Discussion"
   eventcontainerbutton="Panelists"
   eventcontainericon="one"  />
  );
}
}

export default EventMainContainer;
