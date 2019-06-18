import React, { Component } from 'react';
import './panel.css';
import rightarrow from '../components/images/rightarrow.png'
import leftarrow from '../components/images/leftarrow.png'

function panelicons(props) {
	var num= props.two;
	if(props.two==1)
	return (
		<div className='main'>
		     <div className='icons'>
		     	<div className='icon1'></div>
		     	<div className='icon2'></div>
		     	<div className='icon3'>{num}</div>
		     	<div className='icon4'>{++num}</div>
		     	<div className='icon5'>
		     	<img className="leftarrow" src={rightarrow} />
		         </div>
 		     </div>
 		</div>
	);
    else if(props.two==6)
	return (
		<div className='main'>
		    <div className='icons'>
		    	<div className='icon5'>
		    	<img className="leftarrow" src={leftarrow} />
		        </div>
		    	<div className='icon2'>{--num}</div>
		    	<div className='icon3'>{++num}</div>
		    	<div className='icon4'>{++num}</div>
		    	<div className='icon5'>
		    	<img className="leftarrow" src={rightarrow} />
		        </div>
 		    </div>
 		</div>    
	);
    else
	return (
		<div className='main'>
		     <div className='icons'>
		     	<div className='icon5'>
		     	<img className="leftarrow" src={leftarrow} />
		        </div>
		     	<div className='icon2'>{--num}</div>
		     	<div className='icon3'>{++num}</div>
		     	<div className='icon4'>{++num}</div>
		     	<div className='icon5'>
		     	<img className="leftarrow" src={rightarrow} />
		        </div>
 		     </div>
 		</div>
	);
}

export default panelicons;