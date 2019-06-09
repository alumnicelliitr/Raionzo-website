import React from 'react';
import './schedule_2.css'



class  SCHEDULEDATA extends React.Component {
    render() {
      return (
        <div  className="schedule_2">    
            <div className="schedule_2_data">
                <div className="schedule_2_name">{this.props.scheduledeventname}</div>
                <div className="schedule_2_place">{this.props.scheduleplace}</div>
                <div className="schedule_2_timming">{this.props.scheduletimming}</div>
            </div>  
            
        </div>

      );
    }
  }


  export default SCHEDULEDATA;