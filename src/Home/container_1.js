import React from 'react';

import im from './../components/images/im.png'
import './container_1.css';



function CONTAINER1(props) {
  return (
    <div className="container">
   <div className="boxforheading"/>
   <div className="heading" style={{color:`${props.colr}`,width:`${props.widths}`,fontSize:`${props.size}`}}> {props.heading} </div>  
   <div className="imgthomso"><img  className=" imgthomso1" src={im} alt=""/></div>
    </div>
  );
}

export default CONTAINER1;
