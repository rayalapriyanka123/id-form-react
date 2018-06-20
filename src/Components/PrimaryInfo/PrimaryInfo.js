import React , {Component} from 'react';
import './PrimaryInfo.css';
class PrimaryInfo extends Component{
  
    render(){
        return(
        <div>
            <div class="form-group">
            <label for="firstName">First Name :  </label>
            <input type="text" class="form-control" id="firstName" aria-describedby="NameHelp" placeholder="Enter First Name" />
            <br />
            <span id="first_error" class="alert alert-danger">Enter Full Name</span>
            </div>
            <br />
          <div class="form-group">
            <label for="lastname">Last Name :   </label>
            <input type="text" class="form-control" id="lastName" placeholder="Enter Last Name"/>
            <br />
            <span id="last_error" class="alert alert-danger">Enter Last Name</span>
          </div>
        </div>

        )
    };
}
export default PrimaryInfo ;