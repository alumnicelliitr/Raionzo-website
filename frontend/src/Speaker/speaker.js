import React from 'react';
import './speaker.css';
import rightarrow from '../components/images/rightarrow.png'
import leftarrow from '../components/images/leftarrow.png'
import img from '../components/images/dinesh pawar.jpeg'
import img3 from '../components/images/rajnish.jpeg'
import img4 from '../components/images/pankaj.jpeg'
import img5 from '../components/images/manish.jpeg'

function speaker (){
	return(<div className='mainspeaker'>
		         <div>
                 <div className='cont1'>
                 <h1 className='headspeaker'>Panellists</h1>
                 <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                   
                   <div className="carousel-inner car-inner">
                    <div className="item active">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4D03AQFMXFiYjMKvdw/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=2r6G9Qgcm5FdkiPnQvBbpb5F18lNSat8kKC5JGsrLuY' className='circleimg'>
                            </img>
                             <h3 className='namee'>Rajiv Yadav </h3>
                            <p className='para'>Chairman, Brahmaputra Board, Government of India</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQFG8BDxuqcs7g/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=pslVHqzsjpcLWS605HUbpLlIJS8cqV2soj3GtrI5v-0' className='circleimg'>
                            </img>
                             <h3 className='namee'>Naveen Dhillon </h3>
                            <p className='para'>CEO-Antriex Technologies</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQEeEXWb7xIFNQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=YhRaGAMYtT6QvceAul5gaI6bd2txZ3rjP7iSrEWtj50' className='circleimg'>
                            </img>
                             <h3 className='namee'>Amit Sinha</h3>
                            <p className='para'>IG Dehradoon</p>
                       </div>
                      </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                      <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQE8FabyBM2uKQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=CoFqiqb6p-xvkpBnIuiDtHMNQ3IgGMSrbbbTW-3YGUo' className='circleimg'>
                            </img>
                             <h3 className='namee'>Dr. Nirmaljeet Singh Kalsi </h3>
                            <p className='para'> Additionnal Chief secretary (Govt of Punjab)</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQHgG5KyZdyuqA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=tyLoeUj0A9Ml6iYa_QVoB4veTz6QIkO4lSVzXm1lktE' className='circleimg'>
                            </img>
                             <h3 className='namee'>Reena Dayal Yadav </h3>
                            <p className='para'> Director at The Garage India | IEEE</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p160x160/53835448_10211102128948114_3046006044867166208_n.jpg?_nc_cat=107&_nc_oc=AQl_HvC7zb0kgYAHBI8X2slSnJ2HPDuok5fD7-kgsFQpvgPcu_ff5JQyOv1zw9rWyq8&_nc_ht=scontent-bom1-1.xx&oh=ddb0f04cc6e0b8cc3b63edfe2d701185&oe=5DB6872C" className='circleimg'>
                            </img>
                            <h3 className='namee'>Sumedha Limaye</h3>
                            <p className='para'>Sr. Director of Engg at Intel</p>
                       </div>
                       
                       </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4E03AQGROdP6pp7mHg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=IQjq2oQcdqRxfSO7iPsS_-PqFqkL7gNUgCc2eghaIZ8' className='circleimg'>
                            </img>
                             <h3 className='namee'>Akshita Dhankar </h3>
                            <p className='para'>Product Manager -Dunzo</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img4} className='circleimg'>
                            </img>
                             <h3 className='namee'>Pankaj Srivastava</h3>
                            <p className='para'>Additional General Manager-BHEL</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img5} className='circleimg'>
                            </img>
                             <h3 className='namee'>Manish Bhardwaj</h3>
                            <p className='para'>Municipal Commissioner, Vadodara Municipal Corporation</p>
                       </div>
                       
                       </div>
                      </div>
                      <a className="left carousel-control car-control" href="#myCarousel1" data-slide="prev">
                         <span className="glyphicon glyphicon-chevron-left control-but"></span>
                         <span className="sr-only">Previous</span>
                       </a>
                       <a className="right carousel-control car-control" href="#myCarousel1" data-slide="next">
                         <span className="glyphicon glyphicon-chevron-right control-but"></span>
                         <span className="sr-only">Next</span>
                       </a>
                       </div>

                       </div>
                 </div>
                 </div>
                 <div>
                 <div className='cont1'>
                 <h1 className='headspeaker'>Speakers</h1>
                 <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                   
                   <div className="carousel-inner car-inner">
                    <div className="item active">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt=''  src='https://media.licdn.com/dms/image/C4E03AQG7kLg4Qu8MXQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=p6PWfYk6oPXtlzZWHpeIUHGuCfonLBxZLEQUkp3PK24' className='circleimg'>
                            </img>
                             <h3 className='namee'>Navniet Sekera</h3>
                            <p className='para'>IG Lucknow | Baukhaal Tv Series</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5603AQGBgEi7NRqqnQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=p4mpvBFU-raNhy60zEeBLTcMJKpo-XoYqZZ2BzF-QEc' className='circleimg'>
                            </img>
                             <h3 className='namee'>Himanshu Sirohi </h3>
                            <p className='para'>Marketing head | Prega News</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5603AQFEhu4P2Xhmkg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=S9VOH6mBskysYb9FKiAfzemVWeGo-VpvDzNep9vfO_s' className='circleimg'>
                            </img>
                             <h3 className='namee'>Nitesh Jain </h3>
                            <p className='para'>Business Strategy | Paytm</p>
                       </div>
                      </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt=''  src='https://media.licdn.com/dms/image/C4D03AQGeJnUCBcCJhA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=4nXV_5ez4realEXeJLiDr-QEBjUc-AAyM1JpsRdWjhQ' className='circleimg'>
                            </img>
                             <h3 className='namee'>Varun Goel </h3>
                            <p className='para'>HR BHEL</p>
                       </div>
                       
                       </div>
                      </div>
                      <a className="left carousel-control car-control" href="#myCarousel2" data-slide="prev">
                         <span className="glyphicon glyphicon-chevron-left control-but"></span>
                         <span className="sr-only">Previous</span>
                       </a>
                       <a className="right carousel-control car-control" href="#myCarousel2" data-slide="next">
                         <span className="glyphicon glyphicon-chevron-right control-but"></span>
                         <span className="sr-only">Next</span>
                       </a>
                       </div>

                       </div>
                 </div>
                 </div>
                 <div>
                 <div className='cont1'>
                 <h1 className='headspeaker'>Judges</h1>
                 <div id="myCarousel3" className="carousel slide" data-ride="carousel">
                   
                   <div className="carousel-inner car-inner">
                    <div className="item active">
                      <div className="speaker-item">
                       <div className='contbox'>
                           <img alt='' src={img3} className='circleimg'>
                            </img>
                             <h3 className='namee'>Rajnish Khandelwal</h3>
                            <p className='para'>Director KIE Engineering</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4E03AQEXZkzs41jNwg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=Jg1ZrW6gHOH1uMzqi2MRhawmRqXGrMdjJ0G-d7UAiHE' className='circleimg'>
                            </img>
                             <h3 className='namee'>Rachna Singh </h3>
                            <p className='para'>GE Research consultant</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img} className='circleimg'>
                            </img>
                             <h3 className='namee'>Dinesh Pawar</h3>
                            <p className='para'>Alumni Association Member and Entrepreneur</p>
                       </div>
                      </div>
                      </div>
                      
                      
                      <a className="left carousel-control car-control" href="#myCarousel3" data-slide="prev" style={{opacity: 0.5}}>
                         <span className="glyphicon glyphicon-chevron-left control-but"></span>
                         <span className="sr-only">Previous</span>
                       </a>
                       <a className="right carousel-control car-control" href="#myCarousel3" data-slide="next" style={{opacity: 0.5}}>
                         <span className="glyphicon glyphicon-chevron-right control-but"></span>
                         <span className="sr-only">Next</span>
                       </a>
                       </div>

                       </div>
                 </div>
                 </div>
                 <div>
                 <div className='cont1'>
                 <h1 className='headspeaker'>Workshop Mentors</h1>
                 <div id="myCarousel4" className="carousel slide" data-ride="carousel">
                   
                   <div className="carousel-inner car-inner">
                    <div className="item active">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQGt8ltIquWWzQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=Q-fWhdHPdP6hJYQhxaVc5aeWJWuqcH-3ljJD1AMp0jc' className='circleimg'>
                            </img>
                             <h3 className='namee'>Viraj Verma</h3>
                            <p className='para'>UX Designer | Microsoft</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5603AQHPjb3cxHn4Ow/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=gSLYgYi7T67mMpZC4LIaya0Ap1_2PMeHToi4hJX2KTA' className='circleimg'>
                            </img>
                             <h3 className='namee'>Vishnu Rajoria</h3>
                            <p className='para'>Data Scientist | Decision Point Analytics</p>
                       </div>
                       
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQFx-nnxFYh-HA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=3PAsS42EJ4rv8KRd878izwWRyWJfQtgt_n4qFkhINLY' className='circleimg'>
                            </img>
                             <h3 className='namee'>Subhash Patel</h3>
                            <p className='para'>Specialist Programmer at Infosys</p>
                       </div>
                      
                      </div>

                      </div>
                      
                      <a className="left carousel-control car-control" href="#myCarousel4" data-slide="prev" style={{opacity: 0.5}}>
                         <span className="glyphicon glyphicon-chevron-left control-but"></span>
                         <span className="sr-only">Previous</span>
                       </a>
                       <a className="right carousel-control car-control" href="#myCarousel4" data-slide="next" style={{opacity: 0.5}}>
                         <span className="glyphicon glyphicon-chevron-right control-but"></span>
                         <span className="sr-only">Next</span>
                       </a>
                       </div>
                 </div>
                 </div>
                 </div>
                 </div>
		)
}
export default speaker;

/*
<div className="item">
                      <div className="speaker-item">
                        <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQELyRrLTSJoJA/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=Yh_Kqzps55LT-HMUPOn69GNETh2J1oxH84E-3_xUnXE' className='circleimg'>
                            </img>
                             <h3 className='namee'>Sachin Kumar Tyagi</h3>
                            <p className='para'>Business Development Manager, HSBC Global | FMS | CFA L-1</p>
                       </div>
                       
                      </div>
                      
                      </div>
                      */