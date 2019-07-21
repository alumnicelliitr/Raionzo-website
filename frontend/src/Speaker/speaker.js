import React from 'react';
import './speaker.css';
import rightarrow from '../components/images/rightarrow.png'
import leftarrow from '../components/images/leftarrow.png'
import img from '../components/images/dinesh pawar.jpeg'
import img2 from '../components/images/sumedha.jpeg'
import img3 from '../components/images/rajnish.jpeg'

function speaker (){
	return(<div className='mainspeaker'>
		         <div>
                 <div className='cont1'>
                 <h1 className='headspeaker'>Panelist</h1>
                 <div id="myCarousel1" className="carousel slide" data-ride="carousel">
                   
                   <div className="carousel-inner car-inner">
                    <div className="item active">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4D03AQFMXFiYjMKvdw/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=2r6G9Qgcm5FdkiPnQvBbpb5F18lNSat8kKC5JGsrLuY' className='circleimg'>
                            </img>
                             <h3 className='namee'>Rajiv Yadav </h3>
                            <p className='para'> Ministry of Parliamentary Affairs at Indian Administrative Service (IAS)</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5603AQGVcdvLGOgOPw/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=f-kucYfns74nrW65gb-FMGAHK3wf4z0oRDOw4w0dm_4' className='circleimg'>
                            </img>
                            <h3 className='namee'>P.N Pandey</h3>
                            <p className='para'>IRS , WCO Senior management</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://www.tribuneindia.com/2013/20131030/dun.ht9.jpg' className='circleimg'>
                            </img>
                             <h3 className='namee'>Amit Sinha</h3>
                            <p className='para'>IG Dehradoon</p>
                       </div>
                      </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQHgG5KyZdyuqA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=tyLoeUj0A9Ml6iYa_QVoB4veTz6QIkO4lSVzXm1lktE' className='circleimg'>
                            </img>
                             <h3 className='namee'>Reena Dayal Yadav </h3>
                            <p className='para'> Director at The garage India | IEEE</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src={img2} className='circleimg'>
                            </img>
                            <h3 className='namee'>Sumedha Lamaye</h3>
                            <p className='para'>Product Analyst -Dunzo</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C4E03AQGROdP6pp7mHg/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=IQjq2oQcdqRxfSO7iPsS_-PqFqkL7gNUgCc2eghaIZ8' className='circleimg'>
                            </img>
                             <h3 className='namee'>Akshita Dhankar </h3>
                            <p className='para'>IG Dehradoon</p>
                       </div>
                       </div>
                      </div>
                      <div className="item">
                      <div className="speaker-item">
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQE8FabyBM2uKQ/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=CoFqiqb6p-xvkpBnIuiDtHMNQ3IgGMSrbbbTW-3YGUo' className='circleimg'>
                            </img>
                             <h3 className='namee'>Dr. Nirmaljeet singh kalsi </h3>
                            <p className='para'> Additionnal Chief secretary (Govt of Punjab)</p>
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
                            <p className='para'>HR Bhel </p>
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
                             <h3 className='namee'>Rajnish Khandelwal </h3>
                            <p className='para'>Directo KIE Engg</p>
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
                            <p className='para'>Alumni Association and factory owner </p>
                       </div>
                      </div>
                      </div>
                      
                      
                      <a className="left carousel-control car-control" href="#myCarousel3" data-slide="prev">
                         <span className="glyphicon glyphicon-chevron-left control-but"></span>
                         <span className="sr-only">Previous</span>
                       </a>
                       <a className="right carousel-control car-control" href="#myCarousel3" data-slide="next">
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
                            <img alt='' src='https://media.licdn.com/dms/image/C5103AQFx-nnxFYh-HA/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=3PAsS42EJ4rv8KRd878izwWRyWJfQtgt_n4qFkhINLY' className='circleimg'>
                            </img>
                             <h3 className='namee'>Subhash Patel</h3>
                            <p className='para'>specialist programmer at Infosys</p>
                       </div>
                       <div className='contbox'>
                            <img alt='' src='https://media.licdn.com/dms/image/C5603AQHPjb3cxHn4Ow/profile-displayphoto-shrink_800_800/0?e=1568851200&v=beta&t=gSLYgYi7T67mMpZC4LIaya0Ap1_2PMeHToi4hJX2KTA' className='circleimg'>
                            </img>
                             <h3 className='namee'>Vishnu Rajoria</h3>
                            <p className='para'>Data Scientist | Decision Point Analytics</p>
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
export default speaker