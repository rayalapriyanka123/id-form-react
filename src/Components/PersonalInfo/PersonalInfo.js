import React,{Component} from 'react';
import './PersonalInfo.css';
class PersonalInfo extends Component{
    render(){
        return(
            <div class="form-group">
            <label for="bloodgroup">Blood Group</label>
            <select id="bloodgroup" class="form-control">
                <option>AB</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>A-</option>
                <option>B-</option>
                <option>O-</option>

            </select>
        </div>

        )
    }

}
export default PersonalInfo;