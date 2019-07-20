import React from 'react';
import './mobileschedule.css';
import ScheduleDATA from './mobScheduleData'


    class MobileScheduleDay2 extends React.Component{
        constructor(props) {
            super(props);
            this.state=
                {
                    mobScheduleHeadingDay1:"Panel Discussion",
                    mobScheduleHeadingDay2:"Placement And Internship Talk",
                    mobScheduleHeadingDay3:"Workshops",
                    mobScheduleHeadingDay4:"Cult Night"
                };
          }
    
        render(){return(
            <div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay1} </div>
                    <ScheduleDATA schedulecol1="Speaker" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
                </div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay2} </div>
                    <ScheduleDATA schedulecol1="Speaker" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
                </div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay3} </div>
                    <ScheduleDATA schedulecol1="Web-D" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
                    <ScheduleDATA schedulecol1="ML/AI" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
                </div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay4 } </div>
                    <ScheduleDATA schedulecol1="Cult Night" schedulecol2="MAC Auditorium" schedulecol3="10:00 PM"/>
                </div>

           
            </div>
            );}
        }
export default MobileScheduleDay2 ;