import React from 'react';
import './panel.css';
import rightarrow from '../components/images/rightarrow.png'
import rightarrowtwo from '../components/images/rightarrowtwo.png'
import leftarrow from '../components/images/leftarrow.png'
import Mediaquery from 'react-responsive';
import {Link } from 'react-router-dom'
import leftarrowtwo from '../components/images/leftarrowtwo.png'

function panelicons(props) {
	var state={
	     url:['/PD','/PIT','IPC','/GIW','/LT','/CN']
};  
		
	var num= props.two;
	var nex=num;
		var prev=num-2;
	if(props.two===1)
	{var url=num;
		return (
			    <div className='main'>
			        <Mediaquery query='(min-width:414px)'>
			         <div className='icons'>
			         	<div className='icon1'></div>
			         	<div className='icon2'></div>
			         	<div className='icon3'>{num}</div>
			         	<Link to={state.url[url]} className='icon4'>{++num}</Link>
			         	<Link to={state.url[url]} className='icon5'>
			             	<img className="leftarrow" src={rightarrow} alt=''/>
			             </Link>
	 		         </div>
	 		        </Mediaquery>
	 		        <Mediaquery query='(max-width:414px)'>
			         <div className='icons'>
			    	<Link to={state.url[url]} className='icon1 iconfirst'>
			    	<img className="leftarrow" src={rightarrowtwo} alt=''/>
			    	NEXT
			        </Link>
	 		    </div>
	 		        </Mediaquery>
	 		    </div>  
		);}
    else if(props.two===6)
	{url=num-2;
		return (
			<div className='main'>
			    <Mediaquery query='(min-width:414px)'>
			    <div className='icons'>
			    	<Link to={state.url[url]} className='icon5'>
			    	<img className="leftarrow" src={leftarrow} alt=''/>
			        </Link>
			    	<Link to={state.url[url]} className='icon2'>{--num}</Link>
			    	<div className='icon3'>{++num}</div>
			    	<div className='icon4'></div>
			    	<div className='icon1'></div>
	 		    </div>
	 		    </Mediaquery>
	 		    <Mediaquery query='(max-width:414px)'>
	 		    <div className='icons'>
			    	<Link to={state.url[url]} className='icon1 iconlast'>
			    	<img className="leftarrow" src={rightarrowtwo} alt=''/>
			    	PREV
			        </Link>
	 		    </div>
	 		    </Mediaquery>
	 		</div>    
		);}
    else
	{   
		url=num-2;
		return (
			<div className='main'>
			     <Mediaquery query='(min-width:414px)'>
			     <div className='icons'>
			     	<Link to={state.url[url]} className='icon5'>
			     	<img className="leftarrow" src={leftarrow} alt='' />
			        </Link>
			     	<Link to={state.url[url]} className='icon2'>{--num}</Link>
			     	<Link to={state.url[++url]} className='icon3'>{++num}</Link>
			     	<Link to={state.url[++url]} className='icon4'>{++num}</Link>
			     	<Link to={state.url[url]} className='icon5'>
			     	<img className="leftarrow" src={rightarrow} alt='' />
			        </Link>
	 		     </div>
	 		     </Mediaquery>
	 		     <Mediaquery query='(max-width:414px)'>
	 		    <div className='icons'>
			    	<Link to={state.url[prev]} className='icon7'>
			    	<img className="leftarrow" src={leftarrowtwo} alt=''/>
			    	PREV
			        </Link>
			        <Link to={state.url[nex]}  className='icon6'>
			             	<img className="leftarrow" src={rightarrowtwo} alt=''/>
			             	NEXT
			             </Link>
	 		    </div>
	 		    </Mediaquery>
	 		</div>
	);}
}

export default panelicons;