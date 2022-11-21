import React, {Component,  useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  withRouter
} from "react-router-dom";
import ReactDOM from 'react-dom';

// const { mutate } = params;

function Signup() {
const [signupPage, setSignPage] = useState(false);
const {state} = useLocation();
console.log(state)

const handleSubmit = (event) => {
  // console.log(email)
  event.preventDefault();
  axios.post('http://127.0.0.1:8090/api/collections/users/records', {
    firstName: event.target.firstName.value,
    lastName: event.target.lastName.value,
    residentAlum: event.target.residentAlum.value,
    cohortLocation: event.target.cohortLocation.value,
    city: event.target.city.value,
    employed: event.target.employed.value,
    employer: event.target.employer.value,
    salary: event.target.salary.value,
    cohortNum: event.target.cohortNum.value,
    email: event.target.email.value,
    password: '00000000',
    passwordConfirm: '00000000',
    linkedin: event.target.linkedin.value,
    verification: event.target.verification.value,
  })
  .then(() => {
    setSignPage(!signupPage);
  })
  .catch(console.error);
}

  return (
    <div id="signUpBody">
    <h1 style={{'font-weight': 'bold', 'font-size': '30px'}}> Sign up </h1> 
    {!signupPage ? 
    <form onSubmit={handleSubmit} id="formBox">
        <label for='firstName'>First name:</label>
        <input type='text' id='firstName' placeholder='first name' required></input>
        
        <label for='lastName'>Last name:</label>
        <input type='text' id='lastName' placeholder='last name' required></input>

        <label for='email'>Email:<br></br></label>
        <input type='text' id='email' placeholder='email' required></input>

        <label for='residentAlum'>Resident/Alumni:<br></br></label>
        <select id='residentAlum'> 
          <option value="resident">Resident</option>
          <option value="alumni">Alumni</option>
        </select>

        <label for='cohortLocation'> Cohort Location: </label>
        <select id='cohortLocation'> 
          <option value="WCRI">WCRI</option>
          <option value="ECRI">ECRI</option>
          <option value="PTRI">PTRI</option>
        </select>

        <label for='cohortNum'>Cohort Number:<br></br></label>
        <input type='number' id='cohortNum' placeholder='Cohort Number' required></input>
        
        <label for='city'>City:<br></br></label>
        <input type='text' id='city' placeholder='City' required></input>

        <label for='linkedin'>Linkedin:<br></br></label>
        <input type='url' id='linkedin' placeholder='Linkedin' required></input>

        <label for='employed'> Employed: </label>
        <select id='employed'> 
          <option value="true">true</option>
          <option value="false">false</option>
        </select>

        <label for='employer'>Employer:<br></br></label>
        <input type='text' id='employer' placeholder='Job Title' required></input>
        
        <label for='salary'>Estimated Salary:<br></br></label>
        <input type='number' id='salary' placeholder='Estimated Salary' required></input>
        
        <label for='verification'>Verification code:<br></br></label>
        <input type='text' id='verification' placeholder='Verification Code' required></input>
        <button id='submitButton' type='submit'>Submit</button>
    </form>
    : <Redirect to='/home'/>}
    </div>
  )
}

export default withRouter(Signup)

