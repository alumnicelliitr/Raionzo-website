import React from 'react';
import './mobileschedule.css';
import ScheduleDATA from './mobScheduleData'




class MobileScheduleDay1 extends React.Component{
    constructor(props) {
        super(props);
        this.state=
            {
                mobScheduleHeading1:"Leadership Talk",
                mobScheduleHeading2:"Panel Discussion",
                mobScheduleHeading3:"Workshops",
            };
      }

    render(){return(
        <div>

            <div className="mob-Schedule-Box">
            <div className="mobile_schedule_heading">{this.state.mobScheduleHeading1} </div>
            <ScheduleDATA schedulecol1="Speaker" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
            <ScheduleDATA schedulecol1="Speaker" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
            <ScheduleDATA schedulecol1="Speaker" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
        </div>
        <div className="mob-Schedule-Box">
            <div className="mobile_schedule_heading">{this.state.mobScheduleHeading2} </div>
            <ScheduleDATA schedulecol1="International Affairs of India" schedulecol2="LHC 103" schedulecol3="2:00 PM"/>
            <ScheduleDATA schedulecol1="xyz" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
            <ScheduleDATA schedulecol1="abc" schedulecol2="LHC 101" schedulecol3="10:00 AM"/>
        </div>
        <div className="mob-Schedule-Box">
            <div className="mobile_schedule_heading">{this.state.mobScheduleHeading3} </div>
            <ScheduleDATA schedulecol1="Finance" schedulecol2="LHC 103" schedulecol3="3:00 -7:00 PM"/>
            <ScheduleDATA schedulecol1="Design" schedulecol2="LHC 102" schedulecol3="3:00-7:00 PM"/>
        </div>
        </div>
        );}
    }

    export default MobileScheduleDay1;