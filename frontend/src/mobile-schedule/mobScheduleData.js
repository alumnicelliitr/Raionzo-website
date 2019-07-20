
import React from 'react';
import './mobileScheduleData.css';


class ScheduleDATA extends React.Component{

    render(){
  return (<div className="schedule-col">
                <div className="Schedule-col-1"> {this.props.schedulecol1}</div>
                <div className="Schedule-col-2"> {this.props.schedulecol2}</div>
                <div className="Schedule-col-3">{this.props.schedulecol3} </div>

         </div>
  );
}
}
export default ScheduleDATA;