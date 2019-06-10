
import React from 'react';
import './eventcomponent1.css';



class eventComponent1 extends React.Component{

    render(){
  return (<div>
           <div className="eventcontainer1-heading">{this.props.eventheading} </div>
                    
             <div className="eventcontainer1">
                   <div className="eventcontainer1-subcontainer-1">
                       <div className="eventcontainer1-subcontainer-eventinfo">
                       {this.props.eventinfodata}
                   </div>
                    <div className="eventcontainer1-subcontainer-2">   
                       <div className=""> <img className="eventcontainer1-subcontainer-image" src={require('../components/images' + this.props.eventcontainericon + '.png')} alt=""/> </div> 
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
  );
}
}

export default eventComponent1 ;

