import React from 'react';
import './mobile_navbar.css'
import { NavLink, Link } from 'react-router-dom'
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
                       <Link to='/'> <div className="raionzo-mobile-logo"><img className="mobile-raionzo-logo" src={raionzoLogo} alt="Raionzo Logo" /></div></Link>
                        <div className="raionzo-mobile-header">Raionzo</div> 
                    </div>
                    <div className="mobile_index_right">
                        <div className="Hamburger_icon" onClick={this.onHamburgerClick} ><i  className="fas fa-bars"></i></div>
                    </div>
                </div>
            


                <div  className={this.state.isHidden ?   'mobile_navbar_data_after' : 'mobile_navbar_data_before'}>
                    <div className="mobileNavbarCloseButton" onClick={this.onCrossClick} ><i  className="fas fa-times"></i></div>
                        <div className="mobileNavbar">
                        <NavLink activeClassName="mobile_active" exact={true} to ="/"><div className="mobileNavbar-home" onClick={this.onCrossClick}>HOME</div></NavLink>
                        <NavLink  activeClassName="mobile_active" to ="/Events/"><div className="mobileNavbar-event" onClick={this.onCrossClick}>EVENTS</div></NavLink>
                        <NavLink  activeClassName="mobile_active" to="/schedule/"> <div className="mobileNavbar-schedule" onClick={this.onCrossClick}>SCHEDULE</div></NavLink>
                            <div className="mobileNavbar-contactus" onClick={this.onCrossClick}>CONTACT US</div>
                        </div>
                    

                        <div className="mobileNavbarFooter">
                            <div className="mobile_logo">
                               <div className="mobile_logo_linkedin"> <i  className="fab fa-linkedin"></i></div>
                               <div className="mobile_logo_facebook"> <i  className="fab fa-facebook-square"></i></div>
                            </div>
                            <Link to="/Events/" onClick={this.onCrossClick}><div> <button className="mobile_register">Register</button></div></Link>
                        </div>


                    </div>
            </div>
        
        )
    }
}


export default MobileNavbar;