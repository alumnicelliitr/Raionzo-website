
import React from 'react';
import './eventmaincontainer.css';
import  eventComponent1  from './eventcomponent1.js';

class eventMainContainer extends React.Component{
    render(){
  return (
  <eventComponent1 
   eventinfodata=" Panel discussions on the topics “International Affairs of India” and “Women in Tech” where the audience is exposed to new viewpoints and perspectives."
   eventcontainerheading="Panel Discussion"
   eventcontainerbutton="Panelist"
   eventcontainericon="one"  />
  );
}
}

export default eventMainContainer;
