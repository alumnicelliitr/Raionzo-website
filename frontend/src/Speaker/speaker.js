import React from 'react';
import './speaker.css';
import rightarrow from '../components/images/rightarrow.png'
import leftarrow from '../components/images/leftarrow.png'
import img from '../components/images/dinesh pawar.jpeg'
import img3 from '../components/images/rajnish.jpeg'
import img4 from '../components/images/pankaj.jpeg'
import img6 from '../components/images/umakant.jpeg'
import img5 from '../components/images/Reena.jpg'
import img7 from '../components/images/nitesh.jpeg'


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
                            <img alt=''  src='https://media.licdn.com/dms/image/C4E03AQG7kLg4Qu8MXQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=p6PWfYk6oPXtlzZWHpeIUHGuCfonLBxZLEQUkp3PK24' className='circleimg'>
                            </img>
                             <h3 className='namee'>Navniet Sekera</h3>
                            <p className='para'>IG Police HQ, Uttar Pradesh</p>
                            <p className='purp'>International Affairs of India (Impact of Scrapping of Article 370 and 35A)</p>
                         </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4D03AQFMXFiYjMKvdw/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=2r6G9Qgcm5FdkiPnQvBbpb5F18lNSat8kKC5JGsrLuY' className='circleimg'>
                            </img>
                             <h3 className='namee'>Rajiv Yadav </h3>
                            <p className='para'>Chairman, Brahmaputra Board, Government of India</p>
                            <p className='purp'>International Affairs of India (Sustainable Development)</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQEeEXWb7xIFNQ/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=YhRaGAMYtT6QvceAul5gaI6bd2txZ3rjP7iSrEWtj50' className='circleimg'>
                            </img>
                             <h3 className='namee'>Amit Kumar Sinha</h3>
                            <p className='para'>IG FSL/Wireless, Dehradun</p>
                            <p className='purp'>International Affairs of India (Military Affairs)</p>
                       </div>
                      </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                      <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQEB-ROhiGBP6w/profile-displayphoto-shrink_800_800/0?e=1570060800&v=beta&t=HQJJaMcMOTp7OTg3JHq7sogSthNOta_HSie64Qsl-sc' className='circleimg'>
                            </img>
                             <h3 className='namee'>Dr. Nirmaljeet Singh Kalsi </h3>
                            <p className='para'> Additional Chief secretary (Govt of Punjab)</p>
                            <p className='purp'>International Affairs of India (New style of government and management)</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img6} className='circleimg'>
                            </img>
                             <h3 className='namee'>Umakant Umarao</h3>
                            <p className='para'>CEO MPRRA | Senior IAS</p>
                            <p className='purp'>International Affairs of India (Water Disputes)</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img5} className='circleimg'>
                            </img>
                             <h3 className='namee'>Reena Dayal Yadav</h3>
                            <p className='para'> Director at The Garage India | IEEE</p>
                            <p className='purp'>Women in Tech (Technology influenced business world)</p>
                       </div>
                                             
                       </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4E03AQGROdP6pp7mHg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=IQjq2oQcdqRxfSO7iPsS_-PqFqkL7gNUgCc2eghaIZ8' className='circleimg'>
                            </img>
                             <h3 className='namee'>Akshita Dhankar</h3>
                            <p className='para'>Product Manager -Dunzo</p>
                            <p className='purp'>Women in Tech (Societal influences, biases inequalities at workplace)</p>

                       </div>
                       <div className='contbox'>
                            <img alt='' src={img4} className='circleimg'>
                            </img>
                             <h3 className='namee'>Pankaj Srivastava</h3>
                            <p className='para'>Additional General Manager-BHEL</p>
                            <p className='purp'>Women in Tech (Perceiving issues of women in tech)</p>

                       </div>
                       <div className='contbox'>
                            <img alt='' src="https://scontent-bom1-1.xx.fbcdn.net/v/t1.0-1/p160x160/53835448_10211102128948114_3046006044867166208_n.jpg?_nc_cat=107&_nc_oc=AQl_HvC7zb0kgYAHBI8X2slSnJ2HPDuok5fD7-kgsFQpvgPcu_ff5JQyOv1zw9rWyq8&_nc_ht=scontent-bom1-1.xx&oh=ddb0f04cc6e0b8cc3b63edfe2d701185&oe=5DB6872C" className='circleimg'>
                            </img>
                            <h3 className='namee'>Sumedha Limaye</h3>
                            <p className='para'>Sr. Director of Engg at Intel, Corp</p>
                            <p className='purp'>Women in Tech (How to approach work, career & self)</p>

                       </div>
                       
                       </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                         <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQFG8BDxuqcs7g/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=pslVHqzsjpcLWS605HUbpLlIJS8cqV2soj3GtrI5v-0' className='circleimg'>
                            </img>
                             <h3 className='namee'>Naveen Dhillon </h3>
                            <p className='para'>CEO-Antriex Technologies</p>
                            <p className='purp'>Women in Tech (Women in technical(core) entrepreneurship)</p>

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
                            <p className='para'>IG Lucknow</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5603AQGBgEi7NRqqnQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=p4mpvBFU-raNhy60zEeBLTcMJKpo-XoYqZZ2BzF-QEc' className='circleimg'>
                            </img>
                             <h3 className='namee'>Himanshu Sirohi </h3>
                            <p className='para'>Director, Digital Marketing, JLL</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img7} className='circleimg'>
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
                             <h3 className='namee'>Varun Goel</h3>
                            <p className='para'>Dr. Manager (HR) | BHEL, Haridwar</p>
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
                            <p className='para'>Innovation and Strategy Coach</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img} className='circleimg'>
                            </img>
                             <h3 className='namee'>Dinesh Singh Pawar</h3>
                            <p className='para'>Joint Secretary, IITRAA</p>
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
                            <p className='purp'>Design Workshop</p>

                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQHr_uZs3R4yGg/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=_q_z0T86KBd_b7uhm1LMI3ktYL7qgYWkGaHFFjeYJuA' className='circleimg'>
                            </img>
                             <h3 className='namee'>Anurag Sharma</h3>
                            <p className='para'>Sr. Data Scientist at Decision Point Analytics</p>
                            <p className='purp'>Machine Learning Workshop</p>
                       </div>
                       
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4E03AQGni2nohgq6rw/profile-displayphoto-shrink_200_200/0?e=1571875200&v=beta&t=Kxbw44AdFIqwkvLCHbR1nIGMuuKKtLLH3yqAYoF_5qY' className='circleimg'>
                            </img>
                             <h3 className='namee'>Raj Garg</h3> 
                            <p className='para'>Founder CTO Chariot</p>
                            <p className='purp'>Web-D Workshop</p>
                       </div>
                      
                      </div>

                      </div>
                      <div className="item">
                      <div className="speaker-item">
                        <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQELyRrLTSJoJA/profile-displayphoto-shrink_800_800/0?e=1569456000&v=beta&t=Yh_Kqzps55LT-HMUPOn69GNETh2J1oxH84E-3_xUnXE' className='circleimg'>
                            </img>
                             <h3 className='namee'>Sachin Kumar Tyagi</h3>
                            <p className='para'>Business Development Manager, HSBC Global | FMS | CFA L2</p>
                            <p className='purp'>Finance Workshop</p>
                       </div>
                       
                      </div>
                      
                      </div>
                      
                      <a className="left carousel-control car-control" href="#myCarousel4" data-slide="prev">
                         <span className="glyphicon glyphicon-chevron-left control-but"></span>
                         <span className="sr-only">Previous</span>
                       </a>
                       <a className="right carousel-control car-control" href="#myCarousel4" data-slide="next">
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