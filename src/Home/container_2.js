import React from 'react';
import './container_2.css';
import iitrlogo from './../components/images/iitrlogo.png';
import iarclogo from './../components/images/iarclogo.png';
import MediaQuery from 'react-responsive';
import {Link} from "react-router-dom";

class CONTAINER2 extends React.Component {
    render() {
      return (
        <div className="container-2-parent">
            <div className="container-2-child-1">
                <div className="container-2-child-heading">Knitting Thomasonians<br/> together</div>
                <div className="container-2-child-date">August 31 - September 1, 2019</div>
                <div className="container-2-child-button">
                  <MediaQuery query='(max-width:414px)'>
                     <Link to="/Events/"><div className="">  <button type="button" className="container-2-child-button-1">Register Now</button></div></Link>
                     <Link to="/Events/"><div className=""><button type="button" className="container-2-child-button-2"> Events </button></div></Link>
                  </MediaQuery>
                  <MediaQuery query='(min-width:414px)'>
                    <div className="">  <button type="button" className="container-2-child-button-1">About</button></div>
                    <div className=""><button type="button" className="container-2-child-button-2"> IARC </button></div>
                  </MediaQuery>
                </div>
            </div>
            <MediaQuery query='(min-width:414px)'>
               <div className="container-2-child-2" >
                   <div className="container-2-child-presentedby"> Presented By</div>
                   <div className="container-2-parent-logo">
                     <div className="container-2-child-logos ">
                       <img className="container-2-child-logo-1 " src={iitrlogo} alt=""/>
                       <img className="container-2-child-logo-2" src={iarclogo} alt=""/>
                     </div>
                   </div>
                   <div className="registernowbutton">
                   <Link to="/Events/"><button type="button" className="registernow"> Register Now</button></Link>
                   </div>
               </div>
             </MediaQuery>  
        </div>
      );
    }
  }


  export default CONTAINER2;