import React from 'react';
import './mobileschedule.css';
import ScheduleDATA from './mobScheduleData'


    class MobileScheduleDay2 extends React.Component{
        constructor(props) {
            super(props);
            this.state=
                {
                    mobScheduleHeadingDay0:"Idea-pitch Competition",
                    mobScheduleHeadingDay1:"Panel Discussion",
                    mobScheduleHeadingDay2:"Placement And Internship Talk",
                    mobScheduleHeadingDay3:"Workshops",
                    mobScheduleHeadingDay4:"Cult Night"
                };
          }
    
        render(){return(
            <div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay0} </div>
                <ScheduleDATA schedulecol1="Idea-pitch Competition" schedulecol2="LH" schedulecol3="10:00 AM"/>
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay1} </div>
                <ScheduleDATA schedulecol1="Women in Tech" schedulecol2="LHC 101" schedulecol3="11:30 AM"/>
                </div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay2} </div>
                    <ScheduleDATA schedulecol1="Varun Goel" schedulecol2="MAC Audi" schedulecol3="2:00 PM"/>
                    <ScheduleDATA schedulecol1="Nitesh Jain" schedulecol2="MAC Audi" schedulecol3="2:00 PM"/>
                    <ScheduleDATA schedulecol1="Himanshu Sirohi" schedulecol2="MAC Audi" schedulecol3="2:00 PM"/>
                </div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay3} </div>
                    <ScheduleDATA schedulecol1="Machine Learning" schedulecol2="LHC" schedulecol3="3:00 PM"/>
                    <ScheduleDATA schedulecol1="Finance" schedulecol2="LHC" schedulecol3="3:00 PM"/>
                </div>
                <div className="mob-Schedule-Box">
                <div className="mobile_schedule_heading">{this.state.mobScheduleHeadingDay4 } </div>
                    <ScheduleDATA schedulecol1="Cultural Night" schedulecol2="MAC Auditorium" schedulecol3="7:00 PM"/>
                </div>

           
            </div>
            );}
        }
export default MobileScheduleDay2 ;