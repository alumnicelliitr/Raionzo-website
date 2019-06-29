import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home/App';
import * as serviceWorker from './serviceWorker';
import raionzoLogo from './components/images/raionzologo.png';
import Navlink from './components/navlink.js';
import { Route , NavLink, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer.js'
import events from './Events/events.js'
import MediaQuery from 'react-responsive';
import MobileNavbar from './mobile-navbar/mobile_navbar.js'
import MobileSchedule from './mobile-schedule/mobileschedule.js'
import Panel from'./eventData/eventmaincontainer'
import PIT from './eventData/eventmaincontainer2'
import IPC from'./eventData/eventmaincontainer3'
import GIW from'./eventData/eventmaincontainer4'
import LT from'./eventData/eventmaincontainer5'
import CN from'./eventData/eventmaincontainer6'


const routing = (
    <Router>
        <MediaQuery query="(min-device-width: 900px)">
			<div className="nav-bar">
                <img className="raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" />
                <div className="head">Raionzo</div>
                <div className="nav-links">

                    <NavLink activeClassName="active" className="navbar-link" exact={true} to ="/"><Navlink name="Home" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to ="/Events/"><Navlink name="Events" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to="/schedule/"><Navlink name="Schedule" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to="" ><Navlink name="Contact Us" /></NavLink>
                </div>
			    <div className="reg-link">Register</div>
    		</div>
         </MediaQuery>
         <MediaQuery query="(max-device-width: 899.99px)">
         <MobileNavbar/>
         </MediaQuery>


            
            <Route path="/schedule/" component={MobileSchedule} />
            <Route path='/PD/'  component={Panel}/>
            <Route path='/PIT/' component={PIT}/>
            <Route path='/IPC/'  component={IPC}/>
            <Route path='/GIW/'  component={GIW}/>
            <Route path='/LT/'  component={LT}/>
            <Route path='/CN/'  component={CN}/>
            <Route path="/Events/" component={events} />
            <Route path='/' exact component={App}/>
                
            
            <Footer/>
    </Router>
)	




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
