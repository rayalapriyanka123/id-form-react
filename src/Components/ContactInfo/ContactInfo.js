import React , {Component} from 'react';
import './ContactInfo.css';
class ContactInfo extends Component{
    render(){
        return(
         <div>
            <div class="form-group">
            <label for="mobile">Employee contact No :  </label>
            <input type="text" class="form-control" id="mobile" placeholder="employee number" />
            <br />
                <span id="mobile_error" class="alert alert-danger">Enter a valid mobile number</span>
            </div>
            <br />
            <div class="form-group">
            <label for="mobileEer">Emergency contact No :  </label>
            <input type="text" class="form-control" id="mobileEmer" placeholder="emergency number"/> 
            <br />
                <span id="mobileEmer_error" class="alert alert-danger">Enter a valid mobile number</span>
            </div>
         </div>
        )
    }
}

export default ContactInfo;
