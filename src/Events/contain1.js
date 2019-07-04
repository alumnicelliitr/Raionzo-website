import React from 'react';
import './events.css';
import arrow from '../components/images/arrow.png';
import {Link} from 'react-router-dom'

function Contain1(props){
    var name=`${props.name}`
    var urll="/"+name+"/";
	 return  (	<div className="box1" key={props.index}>
	 	                      <img className="pd1" src={props.icon} alt='one'/>
    		                     <div className="side1">
    		                          <h2 className="two">{props.head}</h2>
    		                          <h1 className="num2">0{props.num}</h1>
    		                          <Link to={urll} className="btn1">
                                     <div className='btnn'>EXPLORE</div>
                                     <img className='arrow' src={arrow} alt='arrow'/></Link>
    		                          <div className="btn2 bb2">REGISTER</div>
    		                      </div>    
    		                      
    		                  </div>
    		                  )
}
export default Contain1;