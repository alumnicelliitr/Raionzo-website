import React from 'react';
import './schedule_container.css'
import EVENTSCHEDULE from "./schedule_1.js"
import SCHEDULEDATA from './schedule_2.js'


class  SCHEDULE extends React.Component {
  constructor(props) {
    super(props);
    this.daySchedule= this.daySchedule.bind(this);
    this.nextDaySchedule = this.nextDaySchedule.bind(this);
    this.state = {isActive: false};
  }


  daySchedule()
  {    this.setState({isActive: false});
    
  }

  nextDaySchedule()
  {    this.setState({isActive: true });
  }
  
  renderSchedule()
  {
      if(this.state.isActive===false)
      {
         return(<div>
           <EVENTSCHEDULE length="50vw" scheduledeventname="Leadership Talk"/>
           <SCHEDULEDATA scheduletimming="10AM" scheduleplace="LHC103" scheduledeventname="Name of Speakers"/>
           <EVENTSCHEDULE length="50vw" scheduledeventname="Panel Discussion"/>
           <SCHEDULEDATA scheduletimming="2PM" scheduleplace="LHC103" scheduledeventname="International Affairs of India "/>
           <EVENTSCHEDULE length="58vw" scheduledeventname="Workshop"/>
           <SCHEDULEDATA scheduletimming="3-7 PM" scheduleplace="LHC 103" scheduledeventname="Finance"/>
           <SCHEDULEDATA scheduletimming="3-7 PM" scheduleplace="LHC 102" scheduledeventname="Design"/>
           </div>)
      }
      else
      {
       return(
         <div>
                   <EVENTSCHEDULE length="48vw" scheduledeventname="Panel Discussion"/>
                   <SCHEDULEDATA scheduletimming="10AM" scheduleplace="LHC103" scheduledeventname="Name of Speakers"/>
                   <EVENTSCHEDULE length="25vw" scheduledeventname="Placement and Internship Talks"/>
                   <SCHEDULEDATA scheduletimming="2PM" scheduleplace="LHC103" scheduledeventname="xyz "/>
                   <EVENTSCHEDULE length="57vw" scheduledeventname="workshop"/>
                   <SCHEDULEDATA scheduletimming="3-7 PM" scheduleplace="LHC 103" scheduledeventname="ML"/>
                   <SCHEDULEDATA scheduletimming="3-7 PM" scheduleplace="LHC 102" scheduledeventname="Web-D"/>
                   <EVENTSCHEDULE length="56vw"scheduledeventname="Cult Night"/>
                   <SCHEDULEDATA scheduletimming="a-b PM" scheduleplace="abc" scheduledeventname="abc"/>
         </div>
       )
      }
    } 
  
    render() {
      return (
        <div  className="schedule_main_container">
            <div className="schedule_heading">Schedule</div>
                <div className="schedule_switchbar">
                        <div className="schedule_switchbar_previous">
                            <div className={this.state.isActive ?   'activescheduleclass' : 'schedulebutton'}   onClick={this.daySchedule}>
                            <i  className="fa fa-arrow-left" style={{color:"white",fontSize:"4vw",marginTop:"1vw"}}></i>
                            </div>
                          </div>
                        <div className="schedule_switchbar_daydata">
                          <div className={this.state.isActive ?  'schedulebutton' : "activescheduleclass"} onClick={this.daySchedule}>Day1</div>
                          /<div className={this.state.isActive ?   'activescheduleclass' : 'schedulebutton'} onClick={this.nextDaySchedule}>Day2</div>
                          </div>
                        <div className="schedule_switchbar_next">
                          <div className={this.state.isActive ?  'schedulebutton' : "activescheduleclass"} onClick={this.nextDaySchedule}>
                            <i  className="fa fa-arrow-right" style={{color:"white",fontSize:"4vw",marginTop:"1vw"}}></i></div>
                            </div>
                </div>
                {this.renderSchedule()}
        </div>

      );
    }
  }


  export default SCHEDULE;