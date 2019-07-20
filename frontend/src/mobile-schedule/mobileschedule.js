
import React from 'react';
import './mobileschedule.css';
import CONTAINER1 from '../Home/container_1'
import MobileScheduleDay1 from './mobScheduleDataDay-1'
import MobileScheduleDay2 from './mobScheduleDataDay2'


class MobileSchedule extends React.Component{
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
         { if(this.state.isActive===false)
          {
             return(
                 <MobileScheduleDay1/>
               )
          }
          else
          {
           return(<MobileScheduleDay2/>
           )
          }
        } 
        
      
    render(){
  return (
      
          <div className="schedulebody">
                <CONTAINER1 heading="Schedule" colr="black" widths="20vw" size="6vw"></CONTAINER1>
            <div className="mob-schedule-button">
                   <div> <button className={this.state.isActive ?  'inactivescheduleclass': 'mob-schedule-btn1' }  onClick={this.daySchedule} >Day 1</button></div>
                  <div className="btnsch"> <button  className={this.state.isActive ?  'mob-schedule-btn2' : 'inactivescheduleclass' } onClick={this.nextDaySchedule}>Day 2</button></div>
                </div>
            { this.renderSchedule()}
         </div>
         
        
          

  );
}
}


           
export default MobileSchedule ;


