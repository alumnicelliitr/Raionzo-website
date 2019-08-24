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
            <ScheduleDATA schedulecol1="Navniet Sekera" schedulecol2="MAC Audi" schedulecol3="11:30 AM"/>
        </div>
        <div className="mob-Schedule-Box">
            <div className="mobile_schedule_heading">{this.state.mobScheduleHeading2} </div>
            <ScheduleDATA schedulecol1="International Affairs of India" schedulecol2="MAC Audi" schedulecol3="2:00 PM"/>
        </div>
        <div className="mob-Schedule-Box">
            <div className="mobile_schedule_heading">{this.state.mobScheduleHeading3} </div>
            <ScheduleDATA schedulecol1="Web-D" schedulecol2="LHC" schedulecol3="2 PM"/>
            <ScheduleDATA schedulecol1="Design" schedulecol2="LHC" schedulecol3="2 PM"/>
        </div>
        </div>
        );}
    }

    export default MobileScheduleDay1;