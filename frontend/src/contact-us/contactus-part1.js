import React from 'react';
import './contactus-part1.css'
import ContactPart2 from './contactus-part2'
import axios from "axios";

class ContactPart1 extends React.Component {
     constructor() {
        super();
        this.state = {
         Name: '' , Email:'', Query:'',MobileNo:''
        };
      }
  //state = { Name: '' , Email:'', Query:'',MobileNo:''};
  // toggle = () => {
  //   this.setState({ modal: !this.state.modal });
  // };
      onName = (e) => {
        this.setState({
          Name: e.target.value
        });
        
      };
       onEmail = (e) => {
        this.setState({
          Email: e.target.value
        });
        
      };
       onMobile = (e) => {
        this.setState({
          MobileNo: e.target.value
        });
        
      };
       onQuery = (e) => {
        this.setState({
          Query: e.target.value
        });
        
      };
      

  success = () => {
    console.log("Success");
  }
  // handleChange = event => {
  //   this.setState({
  //     MobileNo: event.target.value
  //   })
  // }
  submission = (e) => {
    e.preventDefault()
    // this.toggle();
    // if(item.id){
    //   axios
    //     //.put(`http://localhost:8000/api/todos/${item.id}/`, item)
    //     .put(`http://127.0.0.1:8000/email/`)
    //     .then(res => this.refreshList());
    //     return;
    // }
    //const { Name, Email, Query,MobileNo} = this.state;
   console.log("******");
   console.log(this.state);
   window.alert('Your response has been submitted. We will contact you soon');
   const data = this.state;
    axios
      .post('https://agile-scrubland-86328.herokuapp.com/email/',{data})
      .then(res => this.success());    
  }

	render() {
    const { Name, Email, Query,MobileNo } = this.state.Name;
  
  	return (<div className="contact-us-1"> 

        <div className="ContactusHeading">How can we help? </div>
    <form id="gform" onSubmit = {this.submission}>
      
      <div className="form">

        <div className="contactuscontent">  
              <div className="formcontent">Name- </div>
                  <div><input  type="text" 
                  value={Name}
              onChange={this.onName}
                  // value={this.state.companyName}
                  //         onChange={event => this.setState({ Name: event.target.value })}
                          required name="name" className="NameBox"/>
                  </div>                                          
        </div>
        

        <div className="contactuscontent">
                        <div className="formcontent">Email-</div>
                            <div>
                              <input  type="email" 
                              value={Email}
              onChange={this.onEmail}
                             // value={this.state.Email}
                               // onChange={event => this.setState({ Email: event.target.value })}
                                required name="from_email" className="EmailBox"/>
                             </div>
          </div>



        <div className="contactuscontent">
            <div className="formcontent">Mobile No-</div>
              <div><input 
                  type="text"  
                  value={MobileNo}
              onChange={this.onMobile}
                   //value={this.state.MobileNo}
                 // onChange={this.handleChange}
                  //onChange={event => this.setState({ MobileNo: event.target.value })}
                  required  name="mobile_no" className="MobileBox"/>
              </div>
        </div>

        <div className="contactuscontent">
            <div className="formcontent"> Query-</div>
              <div><textarea 
                        type="text" 
                        value={Query}
              onChange={this.onQuery}
                        //value={this.state.Query}
                        //onChange={event => this.setState({ Query: event.target.value })} 
                        required name="messages"   className="QueryBox"></textarea>
              </div>
        </div>

      </div>

        <div className="btn-submit"><button  type = "Submit" form="gform" value="Submit" className="submitContact">Send</button></div>

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
