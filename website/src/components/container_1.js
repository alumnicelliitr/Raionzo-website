import React from 'react';
import im from './images/im.png'
import './css/container_1.css';


function CONTAINER1(props) {
  return (
    <div className="container">
   <div className="box"/>
   <div className="heading" style={{color:`${props.colr}`}}> {props.heading} </div>  
   <div className="imgthomso"><img  className=" imgthomso1" src={im} alt="image"/></div>
    </div>
  );
}

export default CONTAINER1;
