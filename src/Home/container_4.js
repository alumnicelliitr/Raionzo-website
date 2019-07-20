import React from 'react';
import './container_4.css';
import iarcblack from './../components/images/iarcblack.png'


class CONTAINER4 extends React.Component {
    render() {
      return (
        <div className="container4">
            <div className="container-4-child-heading" id="aboutIarc">IARC</div>

                <div className="container-4-parent">
                    <div className="container-4-child-1">
                        <div className="container-4-child-body">The Institute Alumni Relations Cell is a student body working under the aegis of Dean of Resources and Alumni Affairs (DORA), IIT Roorkee. Team IARC aims to provide students various opportunities to interact with alumni. This gives the students a lot to learn, the alumni a chance to give back to the institute and help the students. Our team strives hard to achieve this and has taken up many initiatives to do so.
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