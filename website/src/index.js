import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Home/App';
import * as serviceWorker from './serviceWorker';
import SCHEDULE from './schedule/schedule_container.js';
import raionzoLogo from './components/images/raionzologo.png';
import Navlink from './components/navlink.js';
import { Route,Switch, NavLink, BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/Footer.js'
import events from './Events/events.js'
import MediaQuery from 'react-responsive';
import MobileNavbar from './mobile-navbar/mobile_navbar.js';
import MobileSchedule from './mobile-schedule/mobileschedule.js';
import Panel from'./eventData/eventmaincontainer';
import PIT from './eventData/eventmaincontainer2';
import IPC from'./eventData/eventmaincontainer3';
import GIW from'./eventData/eventmaincontainer4';
import LT from'./eventData/eventmaincontainer5';
import CN from'./eventData/eventmaincontainer6';
import ScrollToTop from './ScrollToTop.js';


const routing = (
    <Router>
    <ScrollToTop>
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
            <Switch>
            <Route path='/PD/' exact component={Panel}/>
            <Route path='/PIT/' exact component={PIT}/>
            <Route path='/IPC/' exact component={IPC}/>
            <Route path='/GIW/' exact component={GIW}/>
            <Route path='/LT/' exact component={LT}/>
            <Route path='/CN/' exact component={CN}/>
            <Route path="/Events/" component={events} />
            <Route path='/Home' component={App}/>
            <Route path='/' exact component={App}/>
            <Route exact component={App}/>
            </Switch>            
            
            <Footer/>
            </ScrollToTop>
    </Router>
)	




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
