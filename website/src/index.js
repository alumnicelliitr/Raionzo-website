import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SCHEDULE from './schedule/schedule_container.js';
import raionzoLogo from './components/images/raionzologo.png';
import NavLink from './components/navlink.js';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer.js'
import events from './Events/events.js'
import MediaQuery from 'react-responsive';
import MobileNavbar from './mobile-navbar/mobile_navbar.js'


const routing = (
    <Router>
        <MediaQuery query="(min-device-width: 600px)">
			<div className="nav-bar">
                <img className="raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" />
                <div className="head">Raionzo</div>
                <div className="nav-links">
                    <Link  to ="/"><NavLink name="Home" /></Link>
                    <Link to ="/Events/events"><NavLink name="Events" /></Link>
                    <Link to="/schedule/"><NavLink name="Schedule" /></Link>
                    <Link ><NavLink name="Contact Us" /></Link>
                </div>
			    <div className="reg-link">Register</div>
    		</div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 600px)">
              <MobileNavbar/>  
            </MediaQuery>
            <Route exact path="/" component={App} />
            <Route path="/schedule/" component={SCHEDULE} />
            <Route path="/Events/" component={events} />
            
            <Footer/>
    </Router>
)	




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
