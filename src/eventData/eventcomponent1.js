
import React from 'react';
import './eventcomponent1.css';
import MediaQuery from 'react-responsive';

class EventComponent1 extends React.Component{
    openLink(name){
      if (name==="Idea Pitch Competition")
        window.open("", "_blank");
      else
        window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
    }
    render(){
  return (<div>
           <div className="eventcontainer1-heading">{this.props.eventcontainerheading} </div>
                    
              <div className="eventcontainer1">
                   <div className="eventcontainer1-subcontainer-1">
                       <div className="eventcontainer1-subcontainer-eventinfo">
                       {this.props.eventinfodata}</div>
                    </div>
                    <MediaQuery query='(min-width:415px)'>
                    <div className="eventcontainer1-subcontainer-2">   
                       <div className=""> <img className="eventcontainer1-subcontainer-image" src={require('../components/images/'+ this.props.eventcontainericon +'.png')} alt=""/> </div> 
                   </div>
                   </MediaQuery>
                    <MediaQuery query='(max-width:414px)'>
                    <div className="eventcontainer1-subcontainer-2">   
                       <div className=""> <img className="eventcontainer1-subcontainer-image" src={require('../components/images/' + this.props.eventcontainericon+ 'half.png')} alt=""/> </div> 

                   </div>
                   </MediaQuery>
                   
              </div>
 
 
 
              <div className="eventcontainer1-button">
                         <div className="eventcontainer1-buttons">
                           <button className="eventcontainer1-subcontainer-button-1">Detail</button>
                           <button className="eventcontainer1-subcontainer-button-2">{this.props.eventcontainerbutton}</button>
                         </div>
                         <div className="eventcontainer1-buttons">
                            <button onClick={this.openLink.bind(this, this.props.eventcontainerheading)} className="eventcontainer1-subcontainer-registernow">Register Now</button> 
                         </div>
              </div>
              
            </div>
          

  );
}
}

export default EventComponent1 ;


