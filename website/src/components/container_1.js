import React from 'react';
import imgthomso from './images/im.png'
import './css/container_1.css';


function CONTAINER1(props) {
  return (
    <div className="container">
   <div className="boxforheading"/>
   <div className="heading" style={{color:`${props.colr}`}}> {props.heading} </div>  
   <div className="imgthomso"><img  className=" imgthomso1" src={imgthomso} alt=""/></div>
    </div>
  );
}

export default CONTAINER1;
