
import React from 'react';
import './css/maincontainer.css';
import CONTAINER1 from './container_1';
import CONTAINER2 from './container_2';
import CONTAINER3 from './container_3';
import CONTAINER4 from './container_4';

function MainContainer() {
  return (
  <div className="main-data">
        <CONTAINER1 heading="Raionzo" colr="black"/>
        <CONTAINER2 />
        
        <div className="triangle-topleft"></div>    
        <div className="straightline"></div> 
        <div className="triangle-bottomright-0"></div>
        
        <CONTAINER3/>
        <div className="straightlineblack"></div>  
        <div className="triangle-topleft-1"></div> 
        <div className="triangle-bottomright"></div> 
        
        
        <CONTAINER4/>
        <div className="triangle-topleft-2"></div> 
        <div className="triangle-bottomright1"></div>
        </div>
  );
}

export default MainContainer;
