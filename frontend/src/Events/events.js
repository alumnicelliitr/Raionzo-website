import React, { Component } from 'react';
import './events.css';
import one from '../components/images/one.png';
import two from '../components/images/two.png';
import three from '../components/images/three.png';
import four from '../components/images/four.png';
import five from '../components/images/five.png';
import six from '../components/images/six.png';
import Contain from './contain';
import Contain1 from './contain1';
import CONTAINER1 from '../Home/container_1'
import MediaQuery from 'react-responsive';

class events extends Component {
	
	render(){
 	return(
         <div className="eone">
         <CONTAINER1 heading="Events" colr="white"/>
         <div className="txt">Raionzo 2019 pops out with a combination of workshops, talks, 
         competitions and much more, infused with a blend of thrill and excitement that will 
         undoubtedly leave you with an unforgettable 2-day experience.
         </div>
         <MediaQuery query='(max-width: 414px)'>
             <div className='eventmobile'>
                 <Contain1 index='0' num='1' name='PD' head='Panel Discussion' icon={one}/>
                 <Contain1 index='0' num='2' name='PIT' head='Placement and Intership Talk' icon={two}/> 
                 <Contain1 index='0' num='3' name='IPC' head='Idea-Pitch Competition' icon={three}/> 
                 <Contain1 index='0' num='4' name='GIW' head='Group Interactions and Workshops' icon={four}/> 
                 <Contain1 index='0' num='5' name='LT' head='Leadership Talk' icon={five}/> 
                 <Contain1 index='0' num='6' name='CN' head='Cultural Night' icon={six}/>
             </div>
         </MediaQuery>    
         <MediaQuery query='(min-width:415px)'>
             <div className='eventcontainer'>
                 <Contain  index='0' num='1' name='PD' head='Panel Discussion' icon={one}/>
                 <Contain1 index='0' num='2' name='PIT' head='Placement and Intership Talk' icon={two}/> 
                 <Contain  index='0' num='3' name='IPC' head='Idea-Pitch Competition' icon={three}/> 
                 <Contain1 index='0' num='4' name='GIW' head='Group Interactions and Workshops' icon={four}/> 
                 <Contain  index='0' num='5' name='LT' head='Leadership Talk' icon={five}/> 
                 <Contain1 index='0' num='6' name='CN' head='Cultural Night' icon={six}/>                    
             </div>
         </MediaQuery>    

         </div>
 		)
 } 
}
export default events;