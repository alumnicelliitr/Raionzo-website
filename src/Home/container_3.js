import React from 'react';
import './container_3.css';
import group from './../components/images/Group.png'


class CONTAINER3 extends React.Component {
    render() {
      return (
        <div  className="container3">
            <div className="container-3-child-heading"> About Raionzo</div>
                <div className="container-3-parent">
                    
                    <div className="container-3-child-1" ><img className="container-3-child" src={group} alt=""></img></div> 
                    
                    <div className="container-3-child-2">
                        <div className="container-3-child-body"> <p>RAIONZO, the student-alumni fest being organized for the first time this year by the Institute Alumni Relations Cell (IARC) under the Dean of Resources and Alumni Affairs (DORA), IIT Roorkee. RAIONZO is a magnanimous platform which gives you an incredible opportunity to learn from the experiences of our alumni. This knowledge plays a very important role in guiding you to choose the right path in the future.
                        </p></div>
                     </div>
                </div>
        </div>

      );
    }
  }


  export default CONTAINER3;