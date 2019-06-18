import React from 'react';
import './events.css';
import arrow from '../components/images/arrow.png';
function Contain1(props){
	 return  (	<div className="box1" key={props.index}>
	 	                      <img className="pd1" src={props.icon} alt='one'/>
    		                     <div className="side1">
    		                          <h2 className="two">{props.head}</h2>
    		                          <h1 className="num2">0{props.num}</h1>
    		                          <div className="btn1 bb1">
                                     <p className='btnn'>EXPLORE</p>
                                     <img className='arrow' src={arrow} alt='arrow'/></div>
    		                          <div className="btn2 bb2">REGISTER</div>
    		                      </div>    
    		                      
    		                  </div>
    		                  )
}
export default Contain1;