import React from 'react';
import './container_3.css';
import group from './../components/images/Group.png'


class CONTAINER3 extends React.Component {
    render() {
      return (
        <div  className="container3" id="aboutRaionzo">
            <div className="container-3-child-heading"> About Raionzo</div>
                <div className="container-3-parent">
                    
                    <div className="container-3-child-1" ><img className="container-3-child" src={group} alt=""></img></div> 
                    
                    <div className="container-3-child-2">
                        <div className="container-3-child-body">
                        <p>RAIONZO is a student-alumni fest being organized for the 
                        first time this year by Institute Alumni Relations Cell (IARC) 
                        under the aegis of Dean of Resources and Alumni Affairs (DORA), 
                        IIT Roorkee. RAIONZO is a magnanimous platform which gives you an 
                        incredible opportunity to learn from the experiences and knowledge 
                        of our alumni which plays an important role in guiding you to choose 
                        the right path in future.
                        </p></div>
                     </div>
                </div>
        </div>

      );
    }
  }


  export default CONTAINER3;