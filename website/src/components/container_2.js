import React from 'react';
import './css/container_2.css';

import iitrlogo from './images/iitrlogo.png';

import iarclogo from './images/iarclogo.png';

class CONTAINER2 extends React.Component {
    render() {
      return (
        <div className="container-2-parent">
            <div className="container-2-child-1">
                <div className="container-2-child-heading">Knitting Thomasonians<br/> together</div>
                <div className="container-2-child-date">August 31 - September 1, 2019</div>
                <div className="container-2-child-button">
                    <div className="">  <button type="button" className="container-2-child-button-1">About</button></div>
                    <div className=""><button type="button" className="container-2-child-button-2"> IARC </button></div>
                </div>
            </div>
            <div className="container-2-child-2" >
                <div className="container-2-child-presentedby"> Presented By</div>
                <div classNaame="container-2-parent-logo">
                  <div className="container-2-child-logos ">
                    <img className="container-2-child-logo " src={iarclogo}/>
                    <img className="container-2-child-logo " src={iitrlogo}/>
                  </div>
                </div>
                <div className="registernowbutton">
                <button type="button" className="registernow"> Register Now</button>
                </div>
             </div>  
        </div>
      );
    }
  }


  export default CONTAINER2;