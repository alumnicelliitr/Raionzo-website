import React from 'react';
import './container_4.css';
import iarcblack from './../components/images/iarcblack.png'


class CONTAINER4 extends React.Component {
    render() {
      return (
        <div className="container4">
            <div className="container-4-child-heading">Team IARC</div>
                <div className="container-4-parent">
                    <div className="container-4-child-1">
                        <div className="container-4-child-body">
                         Institute Alumni Relations Cell is a student body working under 
                         the aegis of Dean of Resources and Alumni Affairs (DORA), IIT Roorkee which 
                         aims to provide the campus students enormous opportunities to interact with the
                         alumni which gives the alumni a chance to give   
                         back to their alma-mater. Our team constantly strives hard to
                         strengthen the student-alumni bond through certain initiatives like annual class song, yearbook,
                         video repositories, newsletters, giving-back report, guest lectures, webinars etc.
                        </div>
                    </div>
                    <div className="container-4-child-2" ><img className="container-4-image" src={iarcblack} alt=""></img>
                    </div> 
            </div>
        </div>

      );
    }
  }


  export default CONTAINER4;