import React from 'react';
import './mobile_navbar.css'
import { Route, Link, BrowserRouter as Router,NavLink } from 'react-router-dom'
import raionzoLogo from '../components/images/raionzologo.png';


class MobileNavbar extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {isHidden: false };
        this.onHamburgerClick = this.onHamburgerClick.bind(this);
        this.onCrossClick = this.onCrossClick.bind(this);
      }  

      onHamburgerClick(){
          this.setState({isHidden:true});
      }

      onCrossClick(){
        this.setState({isHidden:false});
      }

    render(){
        return(
            <div className="MOBILEVIEW">
                <div className={this.state.isHidden ?   'mobile_nav_after' : 'mobile_nav_before'}>
                    <div className="mobile_index_left">
                        <div className="raionzo-mobile-logo"><img className="mobile-raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" /></div>
                        <div className="raionzo-mobile-header">Raionzo</div> 
                    </div>
                    <div className="mobile_index_right">
                        <div className="Hamburger_icon" onClick={this.onHamburgerClick} ><i  class="fas fa-bars"></i></div>
                    </div>
                </div>
            


                <div  className={this.state.isHidden ?   'mobile_navbar_data_after' : 'mobile_navbar_data_before'}>
                    <div className="mobileNavbarCloseButton" onClick={this.onCrossClick} ><i className="mobilebarCross" class="fas fa-times"></i></div>
                        <div className="mobileNavbar">
                        <NavLink activeClassName="mobilehome_active" to ="/"><div className="mobileNavbar-home" onClick={this.onCrossClick}>HOME</div></NavLink>
                        <NavLink  activeClassName="mobileEvent_active" to ="/Events/"><div className="mobileNavbar-event" onClick={this.onCrossClick}>EVENTS</div></NavLink>
                        <NavLink  activeClassName="mobileSchedule_active" to="/schedule/"> <div className="mobileNavbar-schedule" onClick={this.onCrossClick}>SCHEDULE</div></NavLink>
                            <div className="mobileNavbar-contactus" onClick={this.onCrossClick}>CONTACT US</div>
                        </div>
                    

                        <div className="mobileNavbarFooter">
                            <div className="mobile_logo">
                              <div className="mobile_logo_instagram"> <i className="mobile_logo_instagram" class="fab fa-instagram"></i></div>
                               <div className="mobile_logo_linkedin"> <i className="mobile_logo_linkedin" class="fab fa-linkedin"></i></div>
                               <div className="mobile_logo_facebook"> <i  className="mobile_logo_facebook" class="fab fa-facebook-square"></i></div>
                            </div>
                            <div> <button className="mobile_register">Register</button></div>
                        </div>


                    </div>
            </div>
        
        )
    }
}


export default MobileNavbar;