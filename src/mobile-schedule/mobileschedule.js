
import React from 'react';
import './mobileschedule.css';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import CONTAINER1 from '../Home/container_1'
import MobileScheduleDay1 from './mobScheduleDataDay-1'
import MobileScheduleDay2 from './mobScheduleDataDay2'


class MobileSchedule extends React.Component{
    
        
      
    render(){
  return (
      <Router>
          <div className="schedulebody">
                <CONTAINER1 heading="Schedule" colr="black" widths="20vw" size="6vw"></CONTAINER1>
            <div className="mob-schedule-button">
               <NavLink  activeClassName="mob-sch-active1" className="navbar-link"  exact={true} to ="/Schedule/">
                    <button className="mob-schedule-btn1">Day 1</button>
                 </NavLink> 
               <NavLink  activeClassName="mob-sch-active2" className="navbar-link"  to ="/Schedule/Day-2">
                   <button className="mob-schedule-btn2">Day 2</button></NavLink> 
                </div>
                <Route  path="/Schedule/" exact component={MobileScheduleDay1} />
                <Route  path="/Schedule/Day-2"  component={MobileScheduleDay2} />
         </div>
         </Router>
        
          

  );
}
}


           
export default MobileSchedule ;


