import React from 'react';
import './events.css';
import arrow from '../images/arrow.png';
function Contain1(props){
    var regClass;
    console.log("ncn");
    if(props.head.localeCompare("Cultural Night")){
        regClass="btn2 bb cult-night";
        console.log("abc");
    }
    else regClass="btn2 bb";
	 return  (	<div className="box1" key={props.index}>
	 	                      <img className="pd1" src={props.icon} alt='one'/>
    		                     <div className="side1">
    		                          <h2 className="two">{props.head}</h2>
    		                          <h1 className="num2">0{props.num}</h1>
    		                          <div className="btn1 bb">
                                     <p className='btnn'>EXPLORE</p>
                                     <img className='arrow' src={arrow} alt='arrow'/></div>
    		                          <div className={regClass}>REGISTER</div>
    		                      </div>    
    		                      
    		                  </div>
    		                  )
    }
}
export default Contain1;