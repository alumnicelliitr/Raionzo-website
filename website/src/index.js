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


const routing = (
    <Router>
			<div className="nav-bar">
                <img className="raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" />
                <div className="head">Raionzo</div>
                <div className="nav-links">
                    <NavLink activeClassName="active" className="navbar-link" to ="/Home"><Navlink name="Home" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to ="/Events/events"><Navlink name="Events" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" to="/schedule/"><Navlink name="Schedule" /></NavLink>
                    <NavLink activeClassName="active" className="navbar-link" ><Navlink name="Contact Us" /></NavLink>
                </div>
			    <div className="reg-link">Register</div>
	
    		</div>
            <Route exact path="/Home" component={App} />
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
