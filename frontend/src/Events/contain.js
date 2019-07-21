import React from 'react';
import './events.css';
import arrow from '../components/images/arrow.png';
import {Link } from 'react-router-dom'


function Contain(props) {
  var name=`${props.name}`
  var urll="/"+name+"/";
  var regLink;
  if(name==="IPC"){
  	regLink="https://forms.gle/wRKoVb8BhQUKVWj96";
  }
  else regLink="https://forms.gle/WXibEXz7xSgZDELt7";

  function openLink(){
  	window.open(regLink, "_blank");
  }
  return ( <div className="box1" key={props.index}>
		       		             <div className="side1">
		       		                 <h1 className="num">0{props.num}</h1>
		       		                 <h2>{props.head}</h2>
		       		                 <Link to={urll} className="btn1">
		       		                 <div className='btnn'>EXPLORE</div>
		       		                 <img className='arrow' src={arrow} alt='arrow'/></Link>
		       		                 <div className="btn2" onClick={openLink}>REGISTER</div>
		       		             </div>    
		       		             <img className="pd" src={props.icon} alt='one'/>
		       		         </div>
		       		         );
}

export default Contain;
