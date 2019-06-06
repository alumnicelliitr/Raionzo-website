import React from 'react';
import './events.css';
import arrow from '../images/arrow.png';
function Contain(props) {
  return ( <div className="box1" key={props.index}>
		       		             <div className="side1">
		       		                 <h1 className="num">0{props.num}</h1>
		       		                 <h2>{props.head}</h2>
		       		                 <div className="btn1">
		       		                 <p className='btnn'>EXPLORE</p>
		       		                 <img className='arrow' src={arrow} alt='arrow'/></div>
		       		                 <div className="btn2">REGISTER</div>
		       		             </div>    
		       		             <img className="pd" src={props.icon} alt='one'/>
		       		         </div>
		       		         );
}

export default Contain;
