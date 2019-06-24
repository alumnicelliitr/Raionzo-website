import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home/App';
import * as serviceWorker from './serviceWorker';
import SCHEDULE from './schedule/schedule_container.js';
import raionzoLogo from './components/images/raionzologo.png';
import Navlink from './components/navlink.js';
import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer.js'
import events from './Events/events.js'
import MediaQuery from 'react-responsive';
import MobileNavbar from './mobile-navbar/mobile_navbar.js'
import MobileSchedule from './mobile-schedule/mobileschedule.js'


const routing = (
    <Router>
        <MediaQuery query="(min-device-width: 600px)">
			<div className="nav-bar">
                <img className="raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" />
                <div className="head">Raionzo</div>
                <div className="nav-links">

                    <NavLink activeClassName="active" className="navbar-link" exact={true} to ="/Home"><Navlink name="Home" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to ="/Events/"><Navlink name="Events" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to="/schedule/"><Navlink name="Schedule" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to="" ><Navlink name="Contact Us" /></NavLink>
                </div>
			    <div className="reg-link">Register</div>
    		</div>
            <Route path="/schedule/" component={SCHEDULE} />
            </MediaQuery>


            <MediaQuery query="(max-device-width: 414px)">
              <MobileNavbar/>  
              <Route path="/schedule/" component={MobileSchedule} />
            </MediaQuery>

            <Route path="/Events/" component={events} />
            <Route path='/Home' component={App}/>
            <Route path='/' exact component={App}/>

            
            <Footer/>
    </Router>
)	




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
