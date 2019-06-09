import React, { Component } from 'react';
import im from '../components/images/im.png';
import './events.css';
import one from '../components/images/one.png';
import two from '../components/images/two.png';
import three from '../components/images/three.png';
import four from '../components/images/four.png';
import five from '../components/images/five.png';
import six from '../components/images/six.png';
import Contain from './contain';
import Contain1 from './contain1';

class events extends Component {
	state={
		boxes:[ {num:1,
				 head:'Panel Discussions',
				 icon:one
			    },
			    {num:2,
				head:'Placement and Intership Talk',
				 icon:two
			    },
				{			    
				num:3,
				head:'Idea Pitch Competition',
				 icon:three
			    },
			    {
				num:4,
				head:'Group Interactions and Workshops',
				 icon:four
			    },
			    {
				num:5,
				head:'Leadership talks',
				 icon:five
			    },
			    {
				num:6,
				head:'Cultural Night',
				icon:six
			}    
		]
		};
	render(){
 	return(
         <div className="eone">
         <div className="first">
             <div className="box"/>
             <h1>Events</h1> 
             <img className="imgg" src={im} />
         </div>
         <div className="txt">A combination of workshops, talks, competitions and much more, infused with thrill and excitement, this fest will undoubtedly leave you with an unforgettable 2-day experience.
         </div>
         <Contain index='0' num='1' head='Panel Discussions' icon={one}/>
         <Contain1 index='0' num='2' head='Placement and Intership Talk' icon={two}/> 
         <Contain index='0' num='3' head='Idea Pitch Competition' icon={three}/> 
         <Contain1 index='0' num='4' head='Group Interactions and Workshops' icon={four}/> 
         <Contain index='0' num='5' head='Leadership talks' icon={five}/> 
         <Contain1 index='0' num='6' head='Cultural Night' icon={six}/>                    
         </div>
 		)
 } 
}
export default events;