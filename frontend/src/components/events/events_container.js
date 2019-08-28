import React, { Component } from 'react';
import im from '../images/im.png';
import './events.css';
import one from '../images/one.png';
import two from '../images/two.png';
import three from '../images/three.png';
import four from '../images/four.png';
import five from '../images/five.png';
import six from '../images/six.png';
import Contain from './contain';
import Contain1 from './contain1';

class EVENTS extends Component {
	render(){
 	return(
         <div className="eone">
         <div className="first">
             <div className="box"/>
             <div className="event-main-head">Events</div> 
             <img className="imgg" src={im} />
         </div>
         <div className="txt">
         This fest pops out with a blend of workshops, talks, competitions and much more
         infused with thrill and excitement
         leaving you with an unforgettable 2-day experience.
         </div>
         <Contain index='0' num='1' head='Panel Discussion' icon={one}/>
         <Contain1 index='0' num='2' head='Placement and Internship Talk' icon={two}/> 
         <Contain index='0' num='3' head='Idea-Pitch Competition' icon={three}/> 
         <Contain1 index='0' num='4' head='Group Interactions and Workshops' icon={four}/> 
         <Contain index='0' num='5' head='Leadership talks' icon={five}/> 
         <Contain1 index='0' num='6' head='Cultural Night' icon={six}/>                    
         </div>
 		)
 } 
}
export default EVENTS;