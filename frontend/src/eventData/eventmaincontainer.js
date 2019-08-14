import './panel.css';
import Panelicons from './panelicons'
import Timing from './timing'
import React from 'react';
import Speaker from './speaker.js';
import  EventComponent1  from './eventcomponent1.js';
import img4 from '../components/images/pankaj.jpeg'
import img6 from '../components/images/umakant.jpeg'
import img5 from '../components/images/Reena.jpg'

class EventMainContainer extends React.Component{
	state={
	 num:1,
    date:'31 August',
    time:'10 AM'
  };

  openLink(){
    window.open("https://forms.gle/WXibEXz7xSgZDELt7", "_blank");
  }

  render(){
  return (
  	<div>
  <EventComponent1 
   eventinfodata=" Panel discussion will be held on the topics “International Affairs of India” 
   and “Women in Tech” where the audience will be exposed to various viewpoints and perspectives of the speakers."
   eventcontainerheading="Panel Discussion"
   eventcontainerbutton="Panellists"
   eventcontainericon="one"
   disp="none"  />
   <div>
	 <Panelicons  two={this.state.num}/>
	 <Timing date={this.state.date}
	            time={this.state.time}
	            page={this.state.num}/>
    </div>

    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators car-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
        <li data-target="#myCarousel" data-slide-to="5"></li>
        <li data-target="#myCarousel" data-slide-to="6"></li>
        <li data-target="#myCarousel" data-slide-to="7"></li>
        <li data-target="#myCarousel" data-slide-to="8"></li>        
      </ol>
      <div className="carousel-inner">
        <div className="item active">
         <Speaker speakername="Rajiv Yadav" speakercontent="Chairman, Brahmaputra Board, Government of India" speakerimg="https://media.licdn.com/dms/image/C4D03AQFMXFiYjMKvdw/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=2r6G9Qgcm5FdkiPnQvBbpb5F18lNSat8kKC5JGsrLuY" />
        </div>
        
        <div className="item">
         <Speaker speakername="Amit Sinha" speakercontent="IPS IG Uttarakhand" speakerimg="https://media.licdn.com/dms/image/C5103AQEeEXWb7xIFNQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=YhRaGAMYtT6QvceAul5gaI6bd2txZ3rjP7iSrEWtj50" />
        </div>
        <div className="item">
         <Speaker speakername="Dr. Nirmaljeet Singh Kalsi" speakercontent="Additional Chief secretary (Govt of Punjab)" speakerimg="https://media.licdn.com/dms/image/C5103AQEB-ROhiGBP6w/profile-displayphoto-shrink_800_800/0?e=1570060800&v=beta&t=HQJJaMcMOTp7OTg3JHq7sogSthNOta_HSie64Qsl-sc" />
        </div>
        <div className="item">
         <Speaker speakername="Umakant Umarao" speakercontent="CEO MPRRA | Senior IAS" speakerimg={img6} />
        </div>
        <div className="item">
         <Speaker speakername="Reena Dayal Yadav" speakercontent="Director at The Garage India | IEEE" speakerimg={img5} />
        </div>
        <div className="item">
         <Speaker speakername="Sumedha Limaye" speakercontent="Sr. Director of Engg at Intel" speakerimg="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p160x160/53835448_10211102128948114_3046006044867166208_n.jpg?_nc_cat=107&_nc_oc=AQl_HvC7zb0kgYAHBI8X2slSnJ2HPDuok5fD7-kgsFQpvgPcu_ff5JQyOv1zw9rWyq8&_nc_ht=scontent-bom1-1.xx&oh=ddb0f04cc6e0b8cc3b63edfe2d701185&oe=5DB6872C" />
        </div>
        <div className="item">
         <Speaker speakername="Akshita Dhankar" speakercontent="Product Manager -Dunzo" speakerimg="https://media.licdn.com/dms/image/C4E03AQGROdP6pp7mHg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=IQjq2oQcdqRxfSO7iPsS_-PqFqkL7gNUgCc2eghaIZ8" />
        </div>
        <div className="item">
         <Speaker speakername="Pankaj Srivastava" speakercontent="Additional General Manager-BHEL" speakerimg={img4} />
        </div>
        <div className="item">
         <Speaker speakername="Naveen Dhillon" speakercontent="CEO Antriex Technologies" speakerimg="https://media.licdn.com/dms/image/C5103AQFG8BDxuqcs7g/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=pslVHqzsjpcLWS605HUbpLlIJS8cqV2soj3GtrI5v-0" />
        </div>
        <a className="left carousel-control car-control" href="#myCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left control-but"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control car-control" href="#myCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right control-but"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
              <div className="event-register">
                <div className="event-register-text">
                  To take part in this event
                </div>
                <div onClick={this.openLink} className="event-register-button">
                  Register
                </div>
              </div>
  </div>
  );
}
}

export default EventMainContainer;
