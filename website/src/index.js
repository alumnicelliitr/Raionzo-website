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


const routing = (
    <Router>
			<div className="nav-bar">
                <img className="raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" />
                <div className="head">Raionzo</div>
                <div className="nav-links">
                    <Link  to ="/"><NavLink name="Home" /></Link>
                    <Link ><NavLink name="Events" /></Link>
                    <Link to="/schedule/schedule_container"><NavLink name="Schedule" /></Link>
                    <Link ><NavLink name="Contact Us" /></Link>
                </div>
			    <div className="reg-link">Register</div>
	
    		</div>
            <Route exact path="/" component={App} />
            <Route path="/schedule/schedule_container" component={SCHEDULE} />
            
            <Footer/>
    </Router>
)	




ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
