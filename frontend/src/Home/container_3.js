import React from 'react';
import './container_3.css';
import group from './../components/images/Group.png'
import ReactDOM from 'react-dom'
import speakerfooter from './../components/images/speakerfooter.png';

class CONTAINER3 extends React.Component {
  componentDidMount() {
    this.ensureVisible();
  }

  componentDidUpdate() {
    this.ensureVisible();
  }

  ensureVisible() {
    if (this.props.active === 'aboutRaionzo') {
      console.log(ReactDOM.findDOMNode(this))
      this.props.scrollIntoView(ReactDOM.findDOMNode(this));
    }
  }
    render() {
      return (
        <div  className="container3" >
            <div className="container-3-child-heading">About Raionzo</div>
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
                <div className="straightlineblack-1 abc"></div>  
          <div className="triangle-topleft-1 abc"></div> 
                <div className="triangle-bottomright-1 abc"></div>
            <div className="about-speaker-1">
        <div className="speaker-box-1">
          <div className="speaker-main-1">
            <div className="speaker-left-1">
              <img src="https://media.licdn.com/dms/image/C4D03AQFMXFiYjMKvdw/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=2r6G9Qgcm5FdkiPnQvBbpb5F18lNSat8kKC5JGsrLuY" className="speaker-img-1" alt="Rajiv Yadav" />
            </div>
            <div className="speaker-right-1">
              <div className="speaker-name-1">Rajiv Yadav</div>
              <div className="speaker-cont-1">IG FSL/Wireless, Dehradun</div>
              <div className="speaker-purp-1">Chief Guest</div>
            </div>
          </div>
          <div className="corner"></div>
          <div className="corner1"></div>
          <div className="corner"></div>
          
        </div>
        </div>   
        </div>
      );
    }
  }


  export default CONTAINER3;