import React, { Component } from 'react';
import './App.css';
import PrimaryInfo from './Components/PrimaryInfo/PrimaryInfo';
import EmployementInfo from './Components/EmploymentInfo/EmploymentInfo';
import PersonalInfo from './Components/PersonalInfo/PersonalInfo';
import ContactInfo from './Components/ContactInfo/ContactInfo';
import  'bootstrap/dist/css/bootstrap.min.css';
class App extends Component{
  constructor(){
    super();
    this.state={
      isFormValid :"false",
      firstName:'',
      lastName:''
    }
  }
  firstname=this.target.value;
  lastname=this.target.value;
    render(){
        return(
          <div>
          <h3 class="text-center">Employee ID Card Form</h3>
          <div class="container">
                <PrimaryInfo />
                  <br />
                
              <EmployementInfo />
              <br />
              
              <PersonalInfo />
              <br />
              <ContactInfo />  
              <br />
              <br />  
                  <button id="submit" class="btn btn-success" disabled={this.state.isFormValid}>Submit</button>
                  </div>
                </div>
        );
      }
    }
    
export default App;
  