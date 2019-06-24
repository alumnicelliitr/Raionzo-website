import React, { Component } from 'react';
import './panel.css';
import rightarrow from '../components/images/rightarrow.png'
import rightarrowtwo from '../components/images/rightarrowtwo.png'
import leftarrow from '../components/images/leftarrow.png'
import Mediaquery from 'react-responsive';

function panelicons(props) {
	var num= props.two;
	if(props.two==1)
	return (
		    <div className='main'>
		        <Mediaquery query='(min-width:414px)'>
		         <div className='icons'>
		         	<div className='icon1'></div>
		         	<div className='icon2'></div>
		         	<div className='icon3'>{num}</div>
		         	<div className='icon4'>{++num}</div>
		         	<div className='icon5'>
		             	<img className="leftarrow" src={rightarrow} />
		             </div>
 		         </div>
 		        </Mediaquery>
 		        <Mediaquery query='(max-width:414px)'>
		         <div className='icons'>
		         	<div className='icon5'>
		             	<img className="leftarrow" src={rightarrowtwo}/>
		             	NEXT
		             </div>
 		         </div>
 		        </Mediaquery>
 		    </div>  
	);
    else if(props.two==6)
	return (
		<div className='main'>
		    <Mediaquery query='(min-width:414px)'>
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
 		    </Mediaquery>
 		    <Mediaquery query='(max-width:414px)'>
 		    <div className='icons'>
		    	<div className='icon1'>
		    	<img className="leftarrow" src={rightarrowtwo} />
		    	PREV
		        </div>
 		    </div>
 		    </Mediaquery>
 		</div>    
	);
    else
	return (
		<div className='main'>
		     <Mediaquery query='(min-width:414px)'>
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
 		     </Mediaquery>
 		     <Mediaquery query='(max-width:414px)'>
 		    <div className='icons'>
		    	<div className='icon7'>
		    	<img className="leftarrow" src={rightarrowtwo} />
		    	PREV
		        </div>
		        <div className='icon6'>
		             	<img className="leftarrow" src={rightarrowtwo}/>
		             	NEXT
		             </div>
 		    </div>
 		    </Mediaquery>
 		</div>
	);
}

export default panelicons;