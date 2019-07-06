import React from 'react';
import './contactus-part1.css'
import ContactPart2 from './contactus-part2'

class ContactPart1 extends React.Component {
  state = { Name: '' , Email:'', Query:'',spamProtection:'',MobileNo:''};
 
	render() {
  
  	return (<div>

        <div className="ContactusHeading">How can we help? </div>
    <form id="gform" method="POST" 
                   action="Link TO gform">
      
      <div className="form">

        <div className="contactuscontent">  
              <div className="formcontent">Name- </div>
                  <div><input  type="text" value={this.state.companyName}
                          onChange={event => this.setState({ Name: event.target.value })}
                          required name="name column name in gsheet" className="NameBox"/>
                  </div>                                          
        </div>
        

        <div className="contactuscontent">
                        <div className="formcontent">Email-</div>
                            <div>
                              <input  type="email" value={this.state.Email}
                                onChange={event => this.setState({ Email: event.target.value })}
                                required  name="email column name in gform" className="EmailBox"/>
                             </div>
          </div>



        <div className="contactuscontent">
            <div className="formcontent">Mobile No-</div>
              <div><input 
                  type="text"   value={this.state.MobileNo}
                  onChange={event => this.setState({ MobileNo: event.target.value })}
                  required  name="phone column name in gform" className="MobileBox"/>
              </div>
        </div>

        <div className="contactuscontent">
            <div className="formcontent"> Query-</div>
              <div><textarea 
                        type="text" 
                        value={this.state.Query}
                        onChange={event => this.setState({ Query: event.target.value })} 
                        required name="Query column name in gform"   className="QueryBox"></textarea>
              </div>
        </div>

      </div>

        <div className="btn-submit"><button type="submit" form="gform" value="Submit" className="submitContact">Send</button></div>

  	</form>
 
      <div className="otherway">
      <div className="Rec-1"></div>
      <div className="otherwaytocontact">Other ways to contact us</div>
      <div className="Rec-2"></div>
      </div>

        <ContactPart2/>
   </div>
    );
  }
}
    



export default ContactPart1;
