import React from 'react';
import './contactus-part2.css'


class ContactPart2 extends React.Component{
  constructor(props){
    super(props);
    this.srcollWin = this.scrollWin.bind(this);
  }

  scrollWin(x,y){
    window.scrollBy(x,2000);
  } 

	render() {
  
  	return (<div>   
      <div className="Contact-us-2">
          <div className="contact-call" onClick={this.scrollWin}>
            <div className="contact-call-logo"><i className="fas fa-phone"></i></div>
            <div className="contact-call-text">Call us</div>
          </div>


          <a href="#phoneNo">
          <div className="contact-email">
             <div className="contact-email-logo"><i  className="fab fa-whatsapp"></i></div>
             <div className="contact-email-text">Whatsapp</div>
          </div>
          </a>


          <div className="fbandlink">
            <div className="fbandlink-logo">
            <a href='https://www.facebook.com/alumnicelliitr/'> <div className="fb-logo-1"><i className="fab fa-facebook-square"></i> </div></a>
            <a href='https://www.linkedin.com/school/iarciitr/'><div className="lin-logo-2"><i className="fab fa-linkedin"></i></div></a>
            </div>
            <div className="fbandlink-text">Social Media</div>
          </div>

      </div>  

   </div>
    );
  }
}
    



export default ContactPart2;
