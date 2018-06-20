import React, {Component} from 'react';
import './EmploymentInfo.css';
class EmployementInfo extends Component{
    render(){
        return(
        <div>
             <div class="form-group">
            <label for="design">Designation</label>
            <input type="text" id="designation" class="form-control" required  placeholder="valid designation"/>
            <br/>
            <span id="design_error" class="alert alert-danger">Enter designation</span>
         </div>
         <br />
            <div class="form-group">
            <label for="EmpId">Employee Id :   </label>
            <input type="text" class="form-control" id="code" placeholder="6 digits" />
            <br />
            <span id="Id_error" class="alert alert-danger">Enter Employee Id</span>
            </div>
        <br />
            <div class="form-group">
             <label for="date">Date of Employeemnt :   </label>
             <input type="date" class="form-control" id="date" />
             <br />
             <span id="date_error" class="alert alert-danger">Enter Date of Employement</span>
            </div>
        <br/>
             <div class="form-group">
             <label for="email">Employee Email (virtusa):   </label>
              <input type="email" class="form-control" id="email" placeholder="example@virtusa.com" />
              <br />
              <span id="email_error" class="alert alert-danger">Enter valid Email</span>
            </div>
            <br/>
             <div class="form-group">
            <label for="reason">Reasons for Issue</label>
            <select id="issue" class="form-control" required>
                <option>New Employee</option>
                <option>Lost</option>
                <option>Defaced</option>
                <option>Conversion</option>
                <option>Designation Change</option>
            </select>
        </div>
        </div>
        )
    }

}

export default EmployementInfo;