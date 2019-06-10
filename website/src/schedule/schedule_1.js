import React from 'react';
import './schedule_1.css'



class  EVENTSCHEDULE extends React.Component {
    render() {
      return (
        <div  className="eventschedule_container">
            <div className="eventschedule_info">
                <div className="eventschedule_line_0"></div>
                <div className="eventschedule_heading">{this.props.scheduledeventname}</div>
                <div className="eventschedule_line_1" style={{width:`${this.props.length}`}}></div>  
                <div className="eventschedule_circle_1"></div>
            </div>    
        </div>

      );
    }
  }


  export default EVENTSCHEDULE;