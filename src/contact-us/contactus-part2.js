import React from 'react';
import './contactus-part2.css'


class ContactPart2 extends React.Component{
 
	render() {
  
  	return (<div>   
      <div className="Contact-us-2">
      <a href="#phoneNo">
          <div className="contact-call">
            <div className="contact-call-logo"><i className="fas fa-phone"></i></div>
            <div className="contact-call-text">Call us</div>
          </div>
          </a>


          <a href="#phoneNo">
          <div className="contact-email">
             <div className="contact-email-logo"><i  className="fab fa-whatsapp"></i></div>
             <div className="contact-email-text">Whatsapp</div>
          </div>
          </a>


          <div className="fbandlink">
            <div className="fbandlink-logo">
              <div className="fb-logo-1"><i className="fab fa-facebook-square"></i> </div>
              <div className="lin-logo-2"><i className="fab fa-linkedin"></i></div>
            </div>
            <div className="fbandlink-text">Social Media</div>
          </div>

      </div>  

   </div>
    );
  }
}
    



export default ContactPart2;
