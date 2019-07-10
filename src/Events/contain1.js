import React from 'react';
import './events.css';
import arrow from '../components/images/arrow.png';
import {Link} from 'react-router-dom'

function Contain1(props){
    var name=`${props.name}`;
    var urll="/"+name+"/";
    var regClass, expClass;
    if(name==="CN"){
        regClass="btn2 bb2 cult-night-reg";
        expClass="btn1 cult-night-exp";
    }
    else{
        regClass="btn2 bb2";
        expClass="btn1";
    }

    function openLink(){
        window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
    }
	 return  (	<div className="box1" key={props.index}>
	 	                      <img className="pd1" src={props.icon} alt='one'/>
    		                     <div className="side1">
    		                          <h2 className="two">{props.head}</h2>
    		                          <h1 className="num2">0{props.num}</h1>
    		                          <Link to={urll} className={expClass}>
                                     <div className="btnn">EXPLORE</div>
                                     <img className='arrow' src={arrow} alt='arrow'/></Link>
    		                          <div className={regClass} onClick={openLink}>REGISTER</div>
    		                      </div>    
    		                      
    		                  </div>
    		                  )
}
export default Contain1;