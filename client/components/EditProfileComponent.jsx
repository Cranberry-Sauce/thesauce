import React, { Component, useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    useLocation,
} from "react-router-dom";

function EditProfileComponent() {
    // const userInfo = url => axios.get(url).then(res => res.data)
    const {state} = useLocation();
    console.log(state);
    const [home, setHome] = useState(false);
    function saveChanges() {
        setHome(true);
    }

    const goHome = [];

    if (home) {
        goHome.push(<Redirect to='/home'/>)
    }

  return (
    <div>
        <h1 id='editProfileHeading'> Edit Profile Here </h1>
        <form id='formBox'>
          <label for='firstName'>First name:</label>
          <input type='text' id='firstName' placeholder='first name' onChange={(e) => setFirstName(e.target.value)} required></input>

          <label for='lastName'>Last name:</label>
          <input type='text' id='lastName' placeholder='last name' onChange={(e) => setLastName(e.target.value)} required></input>

          <label for='email'>Email:<br></br></label>
          <input type='text' id='email' placeholder='email'  disabled='disabled' required></input>

          <div className='visibility'>
            <label for='emailVisibility'>Make your email visible to other Codesmith residents/alumn?<br></br></label>
            <input type='checkbox' id='emailVisibility'></input>
          </div>

          <label for='residentAlum'>Resident/Alumni:<br></br></label>
          <select id='residentAlum'>
            <option value="resident">Resident</option>
            <option value="alumni">Alumni</option>
          </select>

          <label for='cohortLocation'> Cohort Location: </label>
          <select id='cohortLocation'>
            <option value="WCRI">West Coast Immersive</option>
            <option value="ECRI">East Coast Immersive</option>
            <option value="CRI">Central Immersive</option>
            <option value="PTRI">Part Time Immersive</option>
          </select>

          <label for='cohortNum'>Cohort Number:<br></br></label>
          <input type='number' id='cohortNum' placeholder='Cohort Number' required></input>

          <label for='city'>City:<br></br></label>
          <input type='text' id='city' placeholder='City' required></input>

          <label for='linkedin'>LinkedIn:<br></br></label>
          <input type='url' id='linkedin' placeholder='Linkedin' required></input>

          <label for='employed'> Employment Status: </label>
          <select id='employed'>
            <option value="true">Currently Unemployed</option>
            <option value="false">Currently Employed</option>
          </select>

          <label for='employer'>Employer:<br></br></label>
          <input type='text' id='employer' placeholder='Job Title' required></input>

          <label for='salary'>Current Salary:<br></br></label>
          <input type='number' id='salary' placeholder='Current Salary' min='0' required></input>

          <div className='visibility'>
            <label for='salaryVisibility'>Make your salary visible to other Codesmith residents/alumn?<br></br></label>
            <input type='checkbox'></input>
          </div>

          <label for='verification'>Verification code:<br></br></label>
          <input type='text' id='verification' placeholder='Verification Code' required></input>

          <button onClick={saveChanges}> Save Changes </button>
        </form>
        {goHome}
    </div>
  )
}

export default withRouter(EditProfileComponent);