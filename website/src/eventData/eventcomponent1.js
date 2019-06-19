
import React from 'react';
import './eventcomponent1.css';
import Speaker from './speaker.js';



class EventComponent1 extends React.Component{
    
    render(){
  return (<div>
           <div className="eventcontainer1-heading">{this.props.eventcontainerheading} </div>
                    
              <div className="eventcontainer1">
                   <div className="eventcontainer1-subcontainer-1">
                       <div className="eventcontainer1-subcontainer-eventinfo">
                       {this.props.eventinfodata}</div>
                    </div>
                    <div className="eventcontainer1-subcontainer-2">   
                       <div className=""> <img className="eventcontainer1-subcontainer-image" src={require('./../components/images/' + this.props.eventcontainericon + '.png')} alt=""/> </div> 
                   </div>
              </div>
 
 
 
              <div className="eventcontainer1-button">
                         <div className="eventcontainer1-buttons">
                           <button className="eventcontainer1-subcontainer-button-1">Detail</button>
                           <button className="eventcontainer1-subcontainer-button-2">{this.props.eventcontainerbutton}</button>
                         </div>
                         <div className="eventcontainer1-buttons">
                            <button className="eventcontainer1-subcontainer-registernow">Register Now</button> 
                         </div>
              </div>
              <div className="speaker-head">About the {this.props.eventcontainerbutton}</div>
              <Speaker speakername="Ishant Sharma" speakercontent="asjdhq qqqqq qqqqqqqqqqqqqq qqqqqqqqqqqq qqqqqqqqqqqqqqqq qqqqqqqqqq qqqqqq qqqqqqqqqqq qqqqqqqqqqqqq" speakerimg="one" />

              <div className="event-register">
                <div className="event-register-text">
                  To take part in this event
                </div>
                <div className="event-register-button">
                  Register Now
                </div>
              </div>
            </div>
          

  );
}
}

export default EventComponent1 ;


